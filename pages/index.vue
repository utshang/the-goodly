<template>
  <div
    class="banner bg-center bg-cover bg-no-repeat bg-fixed relative h-[calc(100vh-350px)] md:h-screen"
  >
    <div class="hero-overlay bg-opacity-30"></div>
    <div class="absolute-translate-50 top-1/2 left-1/2 w-full">
      <h1
        class="text-4xl md:text-6xl text-center font-bold text-white px-5 md:px-0"
      >
        Welcome to The Goodly !
      </h1>
    </div>
    <NuxtLink
      to="/products/city/product"
      class="absolute-translate-50 bottom-[22%] md:bottom-[30%] left-1/2"
    >
      <button class="btn glass" type="button">Grab Something</button>
    </NuxtLink>
  </div>
  <div class="block">
    <p>abc</p>
    <p>abc</p>
    <p>abc</p>
    <p>abc</p>
    <p>abc</p>
    <p>abc</p>
    <p>abc</p>
    <p>abc</p>
    <p>abc</p>
    <p>abc</p>
    <p>abc</p>
    <p>abc</p>
  </div>
</template>

<script setup>
useHead({
  title: "The Goodly",
});
</script>
