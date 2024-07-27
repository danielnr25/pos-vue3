<script setup>
import Link from '@/components/Link.vue'
import { useRouter } from 'vue-router';
import {useProductsStore} from '@/stores/products'
import { reactive } from 'vue';

const products = useProductsStore();
const router = useRouter();
const formData = reactive({
   name:'',
   price:'',
   stock:'',
   category:'',
   image: '',
})


const submitHandler = async (data) =>{
const {image,...values} = data;
   try {
      await products.createProduct({
         ...values,
      })
      router.push({name: 'productos'})
   } catch (error) {
      console.log(error)
   }
}

</script>

<template>
   <div class="px-10 lg:px-0 lg:pb-10 lg:pt-0 pt-10">
      <Link
         to="productos"
      >
      Volver
      </Link>
      <h1 class="text-4xl font-bold my-8">Nuevo Producto</h1>
      <div class="flex justify-center bg-white shadow max-w-4xl mx-auto">
         <div class="mt-2 p-10 w-full 2xl:w-4/4">
         <FormKit 
            type="form" 
            submit-label="Agregar Producto"
            :value="formData" 
            @submit="submitHandler"
         >
          
            <FormKit
               type="text"
               label="Nombre"
               name="name"
               validation = "required"
               placeholder="Nombre del producto"
               v-model.trim="formData.name"
               v-bind:validation-messages="{
                  required: 'El nombre del producto es obligatorio'
               }"
            />

         <FormKit 
            type="file" 
            label="Imagen Producto" 
            name="image" 
            validation = "required"
            v-bind:validation-messages="{
               required: 'La imagen del producto es obligatorio'
            }"
            v-model.trim="formData.image"
         />

          <FormKit
            type="select"
            label="Categoria"
            name="category"
            validation = "required"
            :options="products.categoryOptions"
            v-bind:validation-messages="{
               required: 'La categoria del producto es obligatorio'
            }"
            v-model.number="formData.category"
          />

          <FormKit
            type="number"
            label="Precio"
            name="price"
            validation = "required"
            placeholder="Precio del producto"
            v-bind:validation-messages="{
               required: 'El precio del producto es obligatorio'
            }"
            v-model.number="formData.price"
            min="1"
          />

          <FormKit
            type="number"
            label="Stock"
            name="stock"
            validation = "required"
            placeholder="Cantidad de disponible"
            v-bind:validation-messages="{
               required: 'Debe ingresar Stock del producto'
            }"
            v-model.number="formData.stock"
            min="1"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>
