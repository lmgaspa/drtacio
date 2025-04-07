import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Artigos from '../components/Artigos.vue'
import Entrevistas from '../components/Entrevistas.vue'
import QuemSou from '../components/QuemSou.vue'
import Contato from '../components/Contato.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/artigos',
    component: Artigos
  },
  {
    path: '/entrevistas',
    component: Entrevistas
  },
  {
    path: '/quemsou',
    component: QuemSou
  },
  {
    path: '/contato',
    component: Contato
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
