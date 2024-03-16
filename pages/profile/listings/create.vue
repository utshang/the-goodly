<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>
    <div class="shadow rounded p-3 mt-5 flex flex-wrap justify-between">
      <AdSelect
        title="Make *"
        :options="makes"
        name="make"
        @change-input="onChangeInput"
      />
      <AdInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="onChangeInput"
      />
      <AdTextarea
        title="Description *"
        name="description"
        placeholder=""
        @change-input="onChangeInput"
      />
      <AdImage @change-input="onChangeInput" />
      <div>
        <button
          @click="handleSubmit"
          :disabled="isButtonDisabled"
          class="btn btn-primary mt-3"
        >
          Submit
        </button>
      </div>
      <div v-if="errorMes" class="text-red-400">{{ errorMes }}</div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});

const { makes } = useCars();
const user = useSupabaseUser();
const errorMes = ref("");

const info = useState("adInfo", () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    features: "",
    description: "",
    image: "image111",
  };
});

const onChangeInput = (data, name) => {
  info.value[name] = data;
};

const inputs = [
  {
    id: 1,
    title: "Model *",
    name: "model",
    placeholder: "Civic",
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2019",
  },
  {
    id: 3,
    title: "Price *",
    name: "price",
    placeholder: "39000",
  },
  {
    id: 4,
    title: "Miles *",
    name: "miles",
    placeholder: "10000",
  },
  {
    id: 5,
    title: "City *",
    name: "city",
    placeholder: "Austin",
  },
  {
    id: 6,
    title: "Number of Seats *",
    name: "seats",
    placeholder: "5",
  },
  {
    id: 7,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interior, No Accidents",
  },
];

const handleSubmit = async () => {
  const body = {
    ...info.value,
    city: info.value.city.toLowerCase(),
    features: info.value.features.split("/ "),
    seats: parseInt(info.value.seats),
    price: parseInt(info.value.price),
    miles: parseInt(info.value.miles),
    year: parseInt(info.value.year),
    name: `${info.value.make} ${info.value.model}`,
    listerId: user.value.id,
    image: "image111",
  };

  try {
    const response = await $fetch("/api/car/listings", {
      method: "post",
      body,
    });
    info.value = "";
    navigateTo("/profile/listings");
  } catch (error) {
    errorMes.value = error.statusMessage;
  }
};
const isButtonDisabled = computed(() => {
  for (let key in info.value) {
    if (!info.value[key]) return true;
  }
  return false;
});
</script>
