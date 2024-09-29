import { POKEDEX_FETCH_LIMIT_DESKTOP, POKEDEX_FETCH_LIMIT_MOBILE } from '@/lib/config';
import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';
import type { IPokemonPreview } from '@/lib/types/pokemon';
import api, { type IGetAllOptions } from '@/lib/api';
import router from '@/router';
import { isMobile } from '@basitcodeenv/vue3-device-detect';

export const usePokedexStore = defineStore('pokedex', () => {
  const porPage = isMobile ? POKEDEX_FETCH_LIMIT_MOBILE : POKEDEX_FETCH_LIMIT_DESKTOP;
  const pokemons = ref<Record<string, IPokemonPreview>>({});
  const loaded = ref<number>(0);
  const count = ref<number>(1);
  const size = ref<number>(0);
  const loading = ref<boolean>(true);
  
  const byOffset = async (value = 0) => {
    if (Object.keys(pokemons.value).length >= count.value) return;
    const offset = value * porPage;
    const options: IGetAllOptions = { limit: porPage, offset };
    const data = await api.getAll(options);
    
    data.results.forEach((pokemon) => {
      if (pokemon.id && !pokemons.value[pokemon.id])
        pokemons.value[pokemon.id] = pokemon;
    });
    
    count.value = data.count;
    size.value = (data.count / porPage) + 1;
  }

  const addInDatabase = async (data: IPokemonPreview[]) => {
    loading.value = true;
    data.forEach((pokemon) => {
      if (pokemon.id && !pokemons.value[pokemon.id])
        pokemons.value[pokemon.id] = pokemon;
    });
    loading.value = false;
  }

  const populate = async (end: number) => {
    loading.value = true;
    while (loaded.value <= end) {
      byOffset(loaded.value);
      loaded.value++;
    }
    loading.value = false;
  }

  onMounted(async () => { 
    const page = Number(router.currentRoute.value.query.page) || 1;
    await populate((page - 1));
  });

  return { 
    pokemons,
    loading,
    size,
    count,
    populate,
    addInDatabase
  };
})
