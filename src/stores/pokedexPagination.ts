import { ref, onMounted, watch } from 'vue';
import { defineStore } from 'pinia';
import type { IPokemonPreview } from '@/lib/types/pokemon';
import api, { type IGetAllOptions } from '@/lib/api';
import router from '@/router';

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
    current.value = (offset / LIMIT) + 1;
    total.value = data.count;
    loading.value = false;
  }

  const setCurrent = () => {
    const page = Number(router.currentRoute.value.query.page) || 0;
    setItems((page - 1) * LIMIT);
  }

  onMounted(setCurrent);
  watch(router.currentRoute, setCurrent);

  return { 
    loading,
    items,
    size,
    current,
    total,
    setItems
  };
})
