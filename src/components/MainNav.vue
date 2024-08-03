<script setup>
   import Logo from '@/components/Logo.vue'
   import Link from '@/components/Link.vue'
   import Categories from './Categories.vue';
</script>

<template>
   <header class="px-10 py-5 bg-gray-900 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between absolute top-0 w-full z-10">
      <div>
        <Logo />
      </div>
      <nav>
         <Link
            to="ventas"
         >
            Administrar
         </Link>
      </nav>
   </header>
   <div class="pt-28 lg:pt-16">
      <Categories />
   </div>
</template>


