import { ref, onMounted, watch, computed } from 'vue';
import { defineStore } from 'pinia';
import type { IPokemonPreview } from '@/lib/types/pokemon';
import api, { type IGetAllOptions } from '@/lib/api';
import router from '@/router';

const LIMIT = 9;

export const usePokedexPaginationStore = defineStore('pokedex-pagination', () => {
  const loading = ref(true);

  const items = ref<Record<string, IPokemonPreview>>({});
  const size = ref<number>(LIMIT);
  const count = ref<number>(0);
  const total = ref<number>(0);
  const loaded = ref<number>(0);
  const search = ref<string>('');
  
  const setItems = async (offset = 0) => {
    const options: IGetAllOptions = { limit: LIMIT, offset };
    const data = await api.getAll(options);

    data.results.forEach((pokemon) => {
      if (pokemon.id && !items.value[pokemon.id])
        items.value[pokemon.id] = pokemon;
    });
    count.value = data.count;
    if (total.value === 0)
      total.value = data.count;
    loading.value = false;
  }

  const setCurrent = () => {
    const page = Number(router.currentRoute.value.query.page) || 1;
    while (loaded.value <= (page - 1) * LIMIT) {
      setItems(loaded.value);
      loaded.value++;
    }
  }

  const setSeach = (value: string) => {
    search.value = value;
    while (loaded.value <= count.value) {
      setItems(loaded.value);
      loaded.value++;
    }
  }

  const filterdItems = computed(() => {
    let newItems: Record<string, IPokemonPreview> = {};
    const hasPagination = true;

    if (search.value) {
      for (const key in items.value) {
          if (items.value[key].name.includes(search.value)) 
            newItems[key] = items.value[key];
      }
      total.value = Object.keys(newItems).length;
    } else {
      newItems = items.value;
    }

    if (hasPagination) {
      const offset = (Number(router.currentRoute.value.query.page) - 1) * LIMIT;
      const limit = offset + LIMIT;
      const itemsKeys = Object.keys(newItems);
      const keys = itemsKeys.slice(offset, limit);
      const newItemsPaginated: Record<string, IPokemonPreview> = {};
      keys.forEach((key) => {
        newItemsPaginated[key] = newItems[key];
      });
      return newItemsPaginated;
    }
    return newItems;
  });


  onMounted(setCurrent);
  watch(router.currentRoute, setCurrent);

  return { 
    loading,
    items: filterdItems,
    size,
    total,
    setItems,
    setSeach
  };
})
