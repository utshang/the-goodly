<template>
  <li>
    <div class="relative h-full">
      <img
        :src="favored ? heartFilled : heartOutline"
        class="w-10 h-10 z-20 absolute bottom-4 right-4 cursor-pointer"
        alt=""
        @click="emits('favor', car.id)"
      />
      <NuxtLink
        :to="`/product/${car.name}-${car.id}`"
        class="card h-full bg-base-100 shadow-xl"
      >
        <NuxtImg
          :src="`${config.public.supabase.url}/storage/v1/object/public/images/${car.image}`"
          alt="prdouct"
          class="p-8 h-60 object-contain"
        />
        <div class="card-body relative">
          <span class="badge border-0 absolute top-1">HOT</span>
          <h2 class="card-title text-base">
            {{ car.name }}
          </h2>
          <p>$ {{ car.price }}</p>
        </div>
      </NuxtLink>
    </div>
  </li>
</template>

<script setup>
import heartFilled from "@/assets/img/icon/heartFilled.png";
import heartOutline from "@/assets/img/icon/heartOutline.png";

const props = defineProps({
  car: Object,
  favored: Boolean,
});

const emits = defineEmits(["favor"]);
const config = useRuntimeConfig();
</script>
