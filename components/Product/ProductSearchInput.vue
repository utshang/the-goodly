<template>
  <div class="form-control">
    <input
      type="text"
      placeholder="Enter City"
      class="input input-bordered w-auto bg-slate-100 btn-searchInput md:w-full"
      v-model="keyword"
      @keyup.enter="searchKeyword"
    />
  </div>
</template>

<script setup>
const keyword = ref("");

const searchKeyword = () => {
  if (!keyword.value) {
    navigateTo(`/`);
  } else if (!isNaN(parseInt(keyword.value))) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid city name",
    });
  } else {
    navigateTo(`/products/${keyword.value}/product`);
  }
};
</script>
