import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      path: '/pokemon/:id',
      name: 'Pokemon',
      component: () => import('../views/PokemonView.vue'),
      meta: { transition: 'slide-right' }
    }
  ]
})

export default router
