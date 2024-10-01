import { POKEDEX_FETCH_LIMIT_DESKTOP, POKEDEX_FETCH_LIMIT_MOBILE } from '@/lib/config';
import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';
import type { IPokemonPreview } from '@/lib/types/pokemon';
import api, { type IGetAllOptions } from '@/lib/api';
import router from '@/router';
import { isMobile } from '@basitcodeenv/vue3-device-detect';

export const usePokedexStore = defineStore('pokedex', () => {
  const pokedexLoaded = localStorage.getItem('pokedex_loaded') || '{}';
  const porPage = isMobile ? POKEDEX_FETCH_LIMIT_MOBILE : POKEDEX_FETCH_LIMIT_DESKTOP;
  const pokemons = ref<Record<string, IPokemonPreview>>(JSON.parse(pokedexLoaded));
  const loaded = ref<number>(0);
  const count = ref<number>(1);
  const size = ref<number>(0);
  const loading = ref<boolean>(true);
  
  const byOffset = async (value = 0) => {
    const offset = value * porPage;
    const options: IGetAllOptions = { limit: porPage, offset };
    const data = await api.getAll(options);

    addInDatabase(data.results);
    
    count.value = data.count;
    size.value = (data.count / porPage) + 1;
  }

  const toggleFavoriteById = (id: number) => {
    if (pokemons.value[id]) {
      pokemons.value[id].favorite = !pokemons.value[id].favorite;
      localStorage.setItem('pokedex_loaded', JSON.stringify(pokemons.value));
    }
  }

  const addInDatabase = async (data: IPokemonPreview[]) => {
    loading.value = true;
    data.forEach((pokemon) => {
      if (pokemon.id && !pokemons.value[pokemon.id])
        pokemons.value[pokemon.id] = pokemon;
    });
    localStorage.setItem('pokedex_loaded', JSON.stringify(pokemons.value));
    loading.value = false;
  }

  const populate = async (end: number) => {
    while (loaded.value <= end) {
      await byOffset(loaded.value);
      loaded.value++;
    }
  }

  onMounted(async () => { 
    const page = Number(router.currentRoute.value.query.page) || 1;
    await populate((page - 1));
    loading.value = false;
  });

  return { 
    pokemons,
    loading,
    size,
    count,
    populate,
    addInDatabase,
    toggleFavoriteById
  };
})
