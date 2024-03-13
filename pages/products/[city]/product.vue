<template>
  <div class="filter flex justify-end">
    <!-- category  -->
    <div class="relative w-3/12 cursor-pointer">
      <div @click="updateModal('city')">
        Location:
        <span class="text-indigo-600">{{
          route.params.city === "city" ? "Any" : route.params.city
        }}</span>
      </div>
      <div class="bg-violet-100 p-5 absolute z-50 w-full" v-if="modal.city">
        <input
          type="text"
          placeholder="City"
          class="input input-bordered w-full max-w-xs"
          v-model="city"
        />
        <button class="btn btn=primary mt-3 w-full" @click="onChangeLocation()">
          Apply
        </button>
      </div>
    </div>
    <!-- brand -->
    <div class="ml-5 relative w-3/12 cursor-pointer">
      <div @click="updateModal('make')">
        Brand:
        <span class="text-indigo-600">{{ route.params.make || "All" }}</span>
      </div>
      <ul class="bg-violet-100 p-5 absolute z-50 w-full" v-if="modal.make">
        <li
          class="text-indigo-600 capitalize"
          v-for="make in makes"
          :key="make"
          @click="onChangeMake(make)"
        >
          {{ make }}
        </li>
      </ul>
    </div>
    <!-- price -->
    <div class="ml-5 relative w-3/12 cursor-pointer">
      <div @click="updateModal('price')">
        Price:
        <span class="text-indigo-600"> {{ priceRangeText }} </span>
      </div>
      <div class="bg-violet-100 p-5 absolute z-50 w-full" v-if="modal.price">
        <input
          type="number"
          placeholder="Min"
          class="input input-bordered w-full max-w-xs"
          v-model="priceRange.min"
        />
        <input
          type="number"
          placeholder="Max"
          class="input input-bordered w-full max-w-xs mt-3"
          v-model="priceRange.max"
        />
        <button class="btn btn=primary mt-3 w-full" @click="onChangePrice()">
          Apply
        </button>
      </div>
    </div>
  </div>
  <NuxtPage />
</template>

<script setup>
// const { data: products } = await useFetch("https://fakestoreapi.com/products");

const { makes } = useCars();
const route = useRoute();
const router = useRouter();
const { capitalizeFirstLetter } = useUpperCase();

definePageMeta({
  layout: "custom",
});

useHead({
  title: `${
    route.params.make
      ? capitalizeFirstLetter(route.params.make)
      : "Something good"
  } in ${capitalizeFirstLetter(route.params.city)}`,
});

const modal = ref({
  city: false,
  make: false,
  price: false,
});

const updateModal = (key) => {
  modal.value[key] = !modal.value[key];
};

// location filter
const city = ref("");
const onChangeLocation = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: "Invalid city format",
    });
  }
  updateModal("city");
  navigateTo(`/products/${city.value}/product/${route.params.make}`);
  city.value = "";
};

// brand filter
const onChangeMake = (make) => {
  updateModal("make");
  navigateTo(`/products/${route.params.city}/product/${make}`);
};

// price filter
const priceRange = reactive({
  min: "",
  max: "",
});

const priceRangeText = computed(() => {
  const minPrice = route.query.minPrice;
  const maxPrice = route.query.maxPrice;

  if (!minPrice && !maxPrice) return "Any";
  else if (!minPrice && maxPrice) {
    return `<${maxPrice}`;
  } else if (minPrice && !maxPrice) {
    return `>${minPrice}`;
  } else {
    return `$${minPrice}~$${maxPrice}`;
  }
});

const onChangePrice = () => {
  updateModal("price");

  if (priceRange.min >= priceRange.max) return;
  else {
    router.push({
      query: {
        minPrice: priceRange.min,
        maxPrice: priceRange.max,
      },
    });
  }
};
</script>
