import { createRouter, createWebHistory } from 'vue-router';
import PageListCar from "@/pages/PageListCar.vue";


const routes = [
  {
    path: '/',
    name: 'ListCar',
    component: PageListCar
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
