<template>
  {{ pending ? "請求中" : "完成" }}
  <Cards :cars="filteredCars" />
</template>

<script setup>
//需要塞入 city 或是任何 query
const route = useRoute();
// 以下方式無法成功取得資料
const {
  data: filteredCars,
  pending,
  refresh,
} = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  // 雖然是 params 但我們 passing it as a query，因為他是 optional 可有可無，所以這樣做也合理
  make: route.params.make,
});
console.log(filteredCars);

// 以下方式可以成功取得資料
// const { data: cars } = await useFetch("/api/cars/test", {
//   transform: (_cars) => _cars.cars,
// });

watch(
  () => route.query,
  () => refresh()
);
</script>
