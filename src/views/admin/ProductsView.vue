<script setup>
// setup me permite usar composition api (que se utiliza en vue3)
import Link from '@/components/Link.vue'

</script>

<template>
   <div class="px-10 lg:px-0 lg:pb-10">
        <Link 
            to="nuevo-producto"
         >Nuevo Producto
         </Link>

       

        <h3>Listado de Productos</h3>
   </div>
</template>