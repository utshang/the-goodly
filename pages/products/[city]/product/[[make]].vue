<template>
  <Cards v-if="filteredCars.length" :cars="filteredCars" />
  <div v-else class="text-center">No Cars Found.</div>
</template>

<script setup>
//需要塞入 city 或是任何 query
const route = useRoute();
// 以下方式無法成功取得資料
const { data: filteredCars, refresh } = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  // 雖然是 params 但我們 passing it as a query，因為他是 optional 可有可無，所以這樣做也合理
  make: route.params.make,
});

watch(
  () => route.query,
  () => {
    window.location.reload(true);
  }
);

console.log(route.params);
console.log(route.query);
</script>
