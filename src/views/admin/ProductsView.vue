<script setup>
// setup me permite usar composition api (que se utiliza en vue3)
import Link from "@/components/Link.vue";
import Product from "@/components/Product.vue";
import { useProductsStore } from "@/stores/products";

// useProductsStore es una función que devuelve el store de productos
const products = useProductsStore();
</script>

<template>
  <div class="px-10 lg:px-0 lg:pb-10 lg:pt-0 pt-10">
    <Link to="nuevo-producto">Nuevo Producto </Link>

    <h1 class="text-4xl font-bold my-10">Listado de Productos</h1>
    <p v-if="products.noResults" class="text-2xl text-center">No hay resultados</p>
    <ul
      v-else
      role="list"
      class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5"
    >
      <Product
         v-for="product in products.productsCollection"
         :key="product.id"
         :product="product"
      />

   
   </ul>
  </div>
</template>
