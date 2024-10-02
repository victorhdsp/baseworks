import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import api from '@/lib/api'

const prefetchPokemonsRoutes = async () => {
  try {
    const data = await api.getAll({offset:0, limit:1302});
    return data.results.map((pokemon) => ({
      path: `/pokemon/${pokemon.id}`,
      name: pokemon.name,
      component: () => import('../views/PokemonView.vue'),
      meta: { transition: 'slide-right' }
    }))
  } catch (error) {
    console.log(error);
    return;
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Pokedex',
      component: HomeView,
      meta: { transition: 'slide-right' }
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: () => import('../views/AboutView.vue'),
      meta: { transition: 'slide-left' }
    },
    {
      path: '/pokemon/:id?',
      name: 'Pokemon',
      component: () => import('../views/PokemonView.vue'),
      meta: { transition: 'slide-right' }
    }
  ]
})

prefetchPokemonsRoutes().then((routes) => {
  routes?.forEach((route) => {
    router.addRoute(route)
  })
})

export default router
