import { ref, onMounted, watch, computed } from 'vue';
import { defineStore } from 'pinia';
import type { IPokemonPreview } from '@/lib/types/pokemon';
import api, { type IGetAllOptions } from '@/lib/api';
import router from '@/router';

const LIMIT = 12;

export const usePokedexPaginationStore = defineStore('pokedex-pagination', () => {
  const loading = ref(true);

  const items = ref<Record<number, IPokemonPreview>>({});
  const size = ref<number>(LIMIT);
  const total = ref<number>(0);

  const setItems = async (offset = 0) => {
    const options: IGetAllOptions = { limit: LIMIT, offset };
    const data = await api.getAll(options);

    data.results.forEach((pokemon) => {
      items.value[pokemon.id] = pokemon;
    });
    total.value = data.count;
    loading.value = false;
  }

  const setCurrent = () => {
    const page = Number(router.currentRoute.value.query.page) || 1;
    setItems((page - 1) * LIMIT);
  }

  onMounted(setCurrent);
  watch(router.currentRoute, setCurrent);

  const filterdItems = computed(() => {
    let newList = Object.values(items.value);
    const hasPagination = true;
    
    if (hasPagination) {
      const page = Number(router.currentRoute.value.query.page) || 1;
      const start = (page - 1) * size.value;
      const end = page * size.value;

      newList = newList.slice(start, end);
    }

    return newList;
  });

  return { 
    loading,
    items: filterdItems,
    size,
    total,
    setItems
  };
})
