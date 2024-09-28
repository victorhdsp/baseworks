import { POKEDEX_FETCH_LIMIT } from '@/lib/config';
import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';
import type { IPokemonPreview } from '@/lib/types/pokemon';
import api, { type IGetAllOptions } from '@/lib/api';
import router from '@/router';

export const usePokedexStore = defineStore('pokedex', () => {
  const pokemons = ref<Record<string, IPokemonPreview>>({});
  const loaded = ref<number>(0);
  const count = ref<number>(1);
  const size = ref<number>(0);
  
  const byOffset = async (value = 0) => {
    if (Object.keys(pokemons.value).length >= count.value) return;
    const offset = value * POKEDEX_FETCH_LIMIT;
    const options: IGetAllOptions = { limit: POKEDEX_FETCH_LIMIT, offset };
    const data = await api.getAll(options);
    
    data.results.forEach((pokemon) => {
      if (pokemon.id && !pokemons.value[pokemon.id])
        pokemons.value[pokemon.id] = pokemon;
    });
    
    count.value = data.count;
    size.value = (data.count / POKEDEX_FETCH_LIMIT) + 1;
  }

  const populate = async (end: number) => {
    while (loaded.value <= end) {
      byOffset(loaded.value);
      loaded.value++;
    }
  }

  onMounted(async () => { 
    const page = Number(router.currentRoute.value.query.page) || 1;
    await populate((page - 1));
  });

  return { 
    pokemons,
    size,
    count,
    populate,
  };
})
