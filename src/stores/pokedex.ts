import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';
import type { IPokemonPreview } from '@/lib/types/pokemon';
import api, { type IGetAllOptions } from '@/lib/api';

export const usePokedexStore = defineStore('pokedex', () => {
  const LIMIT = 20;
  const items = ref<IPokemonPreview[]>([]);
  const loading = ref(true);

  onMounted(async () => {
    const options: IGetAllOptions = { limit: LIMIT, offset: 0 };
    items.value = await api.getAll(options);
    loading.value = false;
  });

  return { loading, items }
})
