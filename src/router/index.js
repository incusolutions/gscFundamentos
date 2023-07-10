import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import EmilioView from '../views/EmilioView.vue';
//import FundamentsCompomnetn from '../components/FundamentsCompomnetn'

const routes = [
  {
    path: '/',
    name: 'emilio',
    component: EmilioView
  },
  
  {
    path: '/fundamentals',
    name: 'fundamentals',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   
    component: () => import(/* webpackChunkName: "about" */ '../components/FundamentsCompomnetn.vue')

  },
  {
    path: '/communication',
    name: 'communication',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   
    component: () => import(/* webpackChunkName: "about" */ '../components/ComunicationComponent.vue')

  },
  {
    path: '/store',
    name: 'store',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   
    component: () => import(/* webpackChunkName: "about" */ '../components/VuexComponent.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
