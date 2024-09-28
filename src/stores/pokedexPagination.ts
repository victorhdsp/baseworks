import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';
import type { IPokemonPreview } from '@/lib/types/pokemon';
import router from '@/router';
import { usePokedexStore } from './pokedex';
import { POKEDEX_FETCH_LIMIT } from '@/lib/config';

export const usePokedexPaginationStore = defineStore('pokedex-pagination', () => {
  const pokedex = usePokedexStore();
  
  const perPage = ref<number>(POKEDEX_FETCH_LIMIT);
  const total = ref<number>(pokedex.size);
  const search = ref<string>('');

  const setSeach = (value: string) => {
    search.value = value;
    pokedex.populate(pokedex.size);
  }

  const filterBySearch = (pokemon: IPokemonPreview) => {
    const _search = search.value.toLowerCase();
    return pokemon.name.includes(_search);
  }

  const filterdPokemons = computed(() => {
    let pokemons: Record<string, IPokemonPreview> = {};
    if (search.value) {
      for (const id in pokedex.pokemons)
        if (filterBySearch(pokedex.pokemons[id]))
          pokemons[id] = pokedex.pokemons[id];
      total.value = Object.keys(pokemons).length;
    } else {
      pokemons = pokedex.pokemons
      total.value = pokedex.count;
    }

    const page = Number(router.currentRoute.value.query.page) || 1;
    const start = (page - 1) * perPage.value;
    const end = start + perPage.value;
    return Object.values(pokemons).slice(start, end);
  });

  watch(router.currentRoute, () => {
    const page = Number(router.currentRoute.value.query.page) || 1;
    pokedex.populate(page - 1);
  });

  return { 
    pokemons: filterdPokemons,
    perPage,
    total,
    setSeach
  };
})
