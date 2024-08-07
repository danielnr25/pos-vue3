import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '@/views/ShopView.vue'
import AdminLayout from '@/views/admin/AdminLayout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shop',
      component: ShopView
    },
   {
      path: '/admin',
      name: 'admin',
      component:AdminLayout,
      children:[
        {
         path: 'productos',
         name: 'productos',
         component: () => import('@/views/admin/ProductsView.vue')
        },
        {
         path: 'productos/nuevo',
         name: 'nuevo-producto',
         component: () => import('@/views/admin/NewProductView.vue')
        },
        {
         path: 'productos/editar/:id',
         name: 'editar-producto',
         component: () => import('@/views/admin/EditProductView.vue')
        },
         {
            path: 'ventas',
            name: 'ventas',
            component: () => import('@/views/admin/SalesView.vue')
         },
      ]
   },
    
  ]
})

export default router
