import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Abyss from '@/views/AbyssGuides.vue'
import Laby from '@/views/Labyrinth.vue'
import HoT from '@/views/HoT.vue'
import Hunt from '@/views/HuntGuides.vue'
import Expe from '@/views/ExpeditionGuides.vue'

//je dois vraiment import tout mes ptn de fichier ??

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
    },
    {
      path: '/expedition',
      name: 'expedition',
      component: Expe
    }
  ]
})

export default router
