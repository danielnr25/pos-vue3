<script setup>
import Link from '@/components/Link.vue'
</script>

<template>
   <div class="px-10 lg:px-0 lg:pb-10 lg:pt-0 pt-10">
   <Link
      to="productos"
   >
   Volver
   </Link>
    <h1 class="text-4xl font-bold my-8">Editar Producto</h1>
    <div class="flex justify-center bg-white shadow max-w-4xl mx-auto">
      <div class="mt-2 p-10 w-full 2xl:w-4/4">

        <FormKit type="form" submit-label="Modificar Producto">
          <FormKit
            type="text"
            label="Nombre"
            name="name"
            placeholder="Nombre del producto"
          />

          <FormKit type="file" label="Imagen Producto" name="image" />

          <FormKit
            type="select"
            label="Categoria"
            name="category"
            :options="['Electronica', 'Hogar', 'Oficina']"
          />

          <FormKit
            type="number"
            label="Precio"
            name="price"
            placeholder="Precio del producto"
          />

          <FormKit
            type="number"
            label="Stock"
            name="stock"
            placeholder="Cantidad de disponible"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>
