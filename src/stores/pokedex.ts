import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';
import config from '@/lib/config';

export const usePokedexStore = defineStore('pokedex', () => {
  const items = ref([])
  const loading = ref(true)

  async function fetchItems() {
    const response = await fetch(`${config.POKEMON_API_URL}/pokemon`)
    const data = await response.json()
    items.value = data.results
    loading.value = false
  }
  onMounted(fetchItems)

  return { loading, items }
})
