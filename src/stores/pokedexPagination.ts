import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';
import type { IPokemonPreview } from '@/lib/types/pokemon';
import api, { type IGetAllOptions } from '@/lib/api';

const LIMIT = 12;

export const usePokedexPaginationStore = defineStore('pokedex-pagination', () => {
  const loading = ref(true);

  const items = ref<IPokemonPreview[]>([]);
  const size = ref<number>(LIMIT);
  const current = ref<number>(0);
  const total = ref<number>(0);

  const setItems = async (offset = 0) => {
    const options: IGetAllOptions = { limit: LIMIT, offset };
    const data = await api.getAll(options);

    items.value = data.results;
    current.value = offset / LIMIT;
    total.value = data.count;
    loading.value = false;
  }

  const setCurrent = (page: number) => {
    setItems(page * LIMIT);
  }

  onMounted(() => {
    setItems();
  });

  return { 
    loading,
    items,
    size,
    current,
    total,
    setItems,
    setCurrent
  };
})
