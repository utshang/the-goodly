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
      <div v-if="errorMsg" class="text-red-400">{{ errorMsg }}</div>
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
const supabase = useSupabaseClient();

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
    image: null,
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

const errorMsg = ref("");
const handleSubmit = async () => {
  //隨機給圖片一個名稱
  const fileName = Math.floor(Math.random() * 100000000000000);
  // 把圖片存到一個叫做 images 的 storage，用 upload 的方式存，info.value.image 為圖片的本身
  const { data, error } = await supabase.storage
    .from("images")
    .upload("public/" + fileName, info.value.image);
  if (error) {
    return (errorMsg.value = "Cannot upload image.");
  }

  console.log(data);

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
    image: data.path, //url path
  };

  try {
    const response = await $fetch("/api/car/listings", {
      method: "post",
      body,
    });
    info.value = {
      make: "",
      model: "",
      year: "",
      miles: "",
      price: "",
      city: "",
      seats: "",
      features: "",
      description: "",
      image: null,
    };
    navigateTo("/profile/listings");
  } catch (error) {
    errorMsg.value = error.statusMessage;
    // 如果 listing 沒有 create 成功，不儲存圖片
    await supabase.storage.from("images").remove(data.path);
  }
};
const isButtonDisabled = computed(() => {
  for (let key in info.value) {
    if (!info.value[key]) return true;
  }
  return false;
});
</script>
