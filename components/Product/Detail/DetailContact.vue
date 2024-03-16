<template>
  <div class="mt-10">
    <div class="flex w-[600px] justify-between">
      <input
        v-model="message.name"
        type="text"
        class="border p-1"
        placeholder="Name"
      />
      <input
        v-model="message.email"
        type="text"
        class="border p-1"
        placeholder="Email"
      />
      <input
        v-model="message.phone"
        type="text"
        class="border p-1"
        placeholder="Phone"
      />
    </div>
    <div class="flex mt-4 w-[600px]">
      <textarea
        v-model="message.message"
        class="border p-1 w-full"
        placeholder="Message"
      ></textarea>
    </div>
    <button
      class="bg-blue-400 text-white px-10 py-3 rounded mt-4"
      :disabled="isButtonDisabled"
      @click="onSubmit"
    >
      Submit
    </button>
    <div v-if="errorMsg" class="text-red-400">{{ errorMsg }}</div>
    <div v-if="successMsg" class="text-green-400">{{ successMsg }}</div>
  </div>
</template>

<script setup>
const route = useRoute();
const message = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const errorMsg = ref("");
const successMsg = ref("");

const isButtonDisabled = computed(() => {
  for (let key in message.value) {
    if (!message.value[key]) return true;
  }
  return false;
});

const onSubmit = async () => {
  try {
    const response = await $fetch(
      `/api/car/listings/${route.params.id}/message`,
      {
        method: "post",
        body: message.value,
      }
    );
    message.value = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
    successMsg.value = "Message sent!";
    errorMsg.value = "";
  } catch (error) {
    errorMsg.value = error.statusMessage;
    successMsg.value = "";
  }
};
</script>
