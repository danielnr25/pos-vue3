<script setup>
import { RouterLink } from 'vue-router'
defineProps({
   to:{
      type:String,
   }
})
</script>

<template>
  <RouterLink
   class="rounded-md text-white font-bold bg-green-500 px-10 py-2"
   :to="{name:to}"
  >
      <slot></slot>
  </RouterLink>
  
</template>

