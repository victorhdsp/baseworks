import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';
import type { IPokemonPreview } from '@/lib/types/pokemon';
import router from '@/router';
import { usePokedexStore } from '../pokedex';
import { POKEDEX_FETCH_LIMIT_DESKTOP, POKEDEX_FETCH_LIMIT_MOBILE } from '@/lib/config';
import api from '@/lib/api';
import { isMobile } from '@basitcodeenv/vue3-device-detect';
import { pokemonFilter } from './filters';

export const usePokedexPaginationStore = defineStore('pokedex-pagination', () => {
  const pokedex = usePokedexStore();
  
  const perPage = ref<number>(isMobile ? POKEDEX_FETCH_LIMIT_MOBILE : POKEDEX_FETCH_LIMIT_DESKTOP);

  const count = ref<number>(0);
  const filterType = ref<number[]>([]);
  const filterSearch = ref<string>('');
  const filterFavorite = ref<boolean>(false);
  
  const setSearch = async (value: string) => {
    filterSearch.value = value;
    await pokedex.populate(pokedex.count);
  }

  const setType = async (types: string[]) => {
    filterType.value = [];
    pokedex.loading = true;
    for (const type of types) {
      const data = await api.getByType(type);
      await pokedex.addInDatabase(data.results);
      
      data.results.forEach((pokemon: IPokemonPreview) => {
        filterType.value.push(pokemon.id);
      });
    }
    pokedex.loading = false;
  }

  const setFavorites = async (favorite: boolean) => {
    filterFavorite.value = favorite;
  }

  const filterdPokemons = computed(() => {
    const { pokemons, total } = pokemonFilter({
      pokemons: {...pokedex.pokemons},
      filters: {
        search: filterSearch.value,
        types: filterType.value,
        favorite: filterFavorite.value,
      },
      page: Number(router.currentRoute.value.query.page) || 1,
      perPage: perPage.value,
      count: pokedex.count || 0,
    });

    count.value = total;
    return pokemons;
  });

  watch(router.currentRoute, () => {
    const page = Number(router.currentRoute.value.query.page) || 1;
    pokedex.populate(page - 1);
  });

  return { 
    pokemons: filterdPokemons,
    perPage,
    total: count,
    setSearch,
    setType,
    populate: pokedex.populate,
    setFavorites,
  };
})
