<template>
  <div v-if="messages.length > 0" class="rounded shadow mt-20">
    <MessageCard
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
  </div>
  <div v-else>There is no message.</div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});

const route = useRoute();

const { data: messages } = useFetch(
  `/api/car/listings/${route.params.id}/message`
);
</script>
