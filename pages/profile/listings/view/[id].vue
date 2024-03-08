<template>
  <div class="rounded shadow mt-20">
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});
</script>
