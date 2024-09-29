import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';
import type { IPokemonPreview } from '@/lib/types/pokemon';
import router from '@/router';
import { usePokedexStore } from './pokedex';
import { POKEDEX_FETCH_LIMIT_DESKTOP, POKEDEX_FETCH_LIMIT_MOBILE } from '@/lib/config';
import api from '@/lib/api';
import { isMobile } from '@basitcodeenv/vue3-device-detect';

export const usePokedexPaginationStore = defineStore('pokedex-pagination', () => {
  const pokedex = usePokedexStore();
  
  const perPage = ref<number>(isMobile ? POKEDEX_FETCH_LIMIT_MOBILE : POKEDEX_FETCH_LIMIT_DESKTOP);
  const pokemons = ref<Record<string, IPokemonPreview>>(pokedex.pokemons);
  const count = ref<number | null>(null);

  const filteredTotal = ref<number>(0);
  const search = ref<string>('');

  const setSearch = async (value: string) => {
    search.value = value;
    await pokedex.populate(pokedex.size);
  }

  const setType = async (types: string[]) => {
    if (types.length === 0) {
      pokemons.value = pokedex.pokemons;
      count.value = pokedex.count;
      return;
    }
    pokemons.value = {};
    count.value = 0;
    types.forEach(async type => {
      const data = await api.getByType(type)
      pokedex.addInDatabase(data.results);
      data.results.forEach((pokemon: IPokemonPreview) => {
        pokemons.value[pokemon.id] = pokemon;
      });
      if (count.value) count.value += data.count;
      else count.value = data.count;
    });
  }

  const filterBySearch = (pokemon: IPokemonPreview) => {
    const _search = search.value.toLowerCase();
    return pokemon.name.includes(_search) || `${pokemon.id}`.includes(_search);
  }

  const filterdPokemons = computed(() => {
    let filteredPokemons: Record<string, IPokemonPreview> = {};
    if (search.value) {
      for (const id in pokemons.value)
        if (filterBySearch(pokemons.value[id]))
          filteredPokemons[id] = pokemons.value[id];
      filteredTotal.value = Object.keys(filteredPokemons).length;
    } else {
      filteredPokemons = pokemons.value;
      filteredTotal.value = count.value || pokedex.count;
    }

    const page = Number(router.currentRoute.value.query.page) || 1;
    const start = (page - 1) * perPage.value;
    const end = start + perPage.value;
    return Object.values(filteredPokemons).slice(start, end);
  });

  watch(router.currentRoute, () => {
    const page = Number(router.currentRoute.value.query.page) || 1;
    pokedex.populate(page - 1);
  });

  return { 
    pokemons: filterdPokemons,
    perPage,
    total: filteredTotal,
    setSearch,
    setType,
    populate: pokedex.populate,
  };
})
