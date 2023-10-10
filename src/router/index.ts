import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue' //??
import Abyss from '../views/Abyss/AbyssGuides.vue'
import Laby from '../views/Labyrinth.vue'
import HoT from '../views/HoT.vue'
import Hunt from '../views/Hunts/HuntGuides.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/abyss',
      name: 'abyss',
      component: Abyss
    },
    {
      path: '/labyrinth',
      name: 'labyrinth',
      component: Laby
    },
    {
      path: '/hot',
      name: 'hot',
      component: HoT
    },
    {
      path: '/hunts',
      name: 'hunt',
      component: Hunt
    }
  ]
})

export default router
