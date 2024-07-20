<script setup>
   import {RouterLink, useRoute} from 'vue-router'
   import Logo from '@/components/Logo.vue'
   import Link from '@/components/Link.vue'

   const route = useRoute();
   const isLinkActive = (name) => route.name === name;
   
</script>

<template>
   <header class="px-10 py-5 bg-gray-900 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between absolute top-0 w-full z-10">
      <div>
         <Logo />         
      </div>
      <nav class="space-x-4"> 
         <RouterLink 
            :to="{name:'productos'}"
            class="text-white font-bold p-2 rounded"
            v-bind:class="{'border-b-2 border-green-500 text-green-300':isLinkActive('productos')}"
         >
            Productos
         </RouterLink>

         <RouterLink 
            :to="{name:'ventas'}"
            class="text-white font-bold p-2 rounded"
             v-bind:class="{'border-b-2 border-green-500 text-green-300':isLinkActive('ventas')}"
         >
            Ventas
         </RouterLink>

         <Link
            to="shop"
         >
            Tienda
         </Link>
      </nav>
   </header>
</template>


