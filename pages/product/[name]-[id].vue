<!-- <template>
  <div class="grid grid-cols-1 xl:grid-cols-2">
    <NuxtImg
      :src="product.url"
      alt="product.title"
      class="w-96 block mx-auto my-0"
    />
    <div class="m-8 xl:m-0">
      <div class="text-sm breadcrumbs">
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products/category/product">Products</NuxtLink></li>
          <li>
            <NuxtLink :to="`/product/${product.name}-${product.id}`">
              No. {{ product.id }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <h1 class="font-bold text-3xl">{{ product.name }}</h1>
      <div class="rating mt-5">
        <input type="radio" name="rating-1" class="mask mask-star" />
        <input type="radio" name="rating-2" class="mask mask-star" checked />
        <input type="radio" name="rating-3" class="mask mask-star" />
        <input type="radio" name="rating-4" class="mask mask-star" />
        <input type="radio" name="rating-5" class="mask mask-star" />
      </div>
      <p class="text-xl my-5">$ {{ product.price }}</p>
      <div class="border-l-4 border-gray-400 pl-5">
        <p>{{ product.description }}</p>
      </div>
      <div>
        <select
          class="select w-[25%] max-w-xs border-2 border-gray-400 rounded-none mt-5 mr-5"
        >
          <option disabled selected>1</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <button class="btn py-3 btn-primary hover:bg-neutral-800" type="button">
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</template> -->

<template>
  <div>
    <DetailHero :car="car" />
    <DetailAttributes :features="car.features" />
    <DetailDescription :description="car.description" />
    <DetailContact />
  </div>
</template>

<script setup>
// const { id } = useRoute().params;
// const productUrl = "https://fakestoreapi.com/products/" + id;
// const { data: product } = await useFetch(productUrl);
const { cars } = useCars();
const route = useRoute();

const car = computed(() => {
  return cars.find((c) => {
    return c.id === parseInt(route.params.id);
  });
});

if (!car.value) {
  throw createError({
    statusCode: 404,
    statusMessage: `Product with ID of ${route.params.id} doesn't exist, please try again!`,
  });
}

definePageMeta({
  layout: "custom",
});

useHead({
  title: `${car.value.name} is good!`,
});
</script>
