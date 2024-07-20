import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '@/views/ShopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/sales',
      name: 'sales',
      component: () => import('@/views/admin/SalesView.vue')
    }
  ]
})

export default router
