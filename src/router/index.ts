import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ArtigosView from '../views/ArtigosView.vue'
import EntrevistasView from '../views/EntrevistasView.vue'
import QuemSouView from '../views/QuemSouView.vue'
import ContatoView from '../views/ContatoView.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomeView },
  {
    path: '/artigos',
    name: 'Artigos',
    component: ArtigosView
  },
  {
    path: '/entrevistas',
    name: 'Entrevistas',
    component: EntrevistasView
  },
  {
    path: '/quem-sou',
    name: 'QuemSou',
    component: QuemSouView
  },
  {
    path: '/contato',
    name: 'Contato',
    component: ContatoView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router