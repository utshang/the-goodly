<script setup>
// const { cars } = useCars();
const props = defineProps({
  cars: Array,
});
const favorite = useLocalStorage("favorite", {});

const handleFavorite = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>

<template>
  <ul class="productList grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
    <ClientOnly>
      <ProductCard
        v-for="car in cars"
        :key="car.id"
        :car="car"
        @favor="handleFavorite"
        :favored="car.id in favorite"
      />
    </ClientOnly>
  </ul>
</template>
