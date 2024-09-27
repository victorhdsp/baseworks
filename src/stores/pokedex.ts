import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';
import type { IPokemonPreview } from '@/lib/types/pokemon';
import api, { type IGetAllOptions } from '@/lib/api';

export const usePokedexStore = defineStore('pokedex', () => {
  const LIMIT = 12;
  const items = ref<IPokemonPreview[]>([]);
  const loading = ref(true);

  const setItems = async (offset = 0) => {
    const options: IGetAllOptions = { limit: LIMIT, offset };
    items.value = await api.getAll(options);
    loading.value = false;
  }

  onMounted(() => {
    setItems();
  });

  return { loading, items, setItems };
})
