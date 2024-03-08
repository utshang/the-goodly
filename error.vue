<template>
  <div class="max-w-screen-lg mx-auto mb-0 mt-32 px-10">
    <div>
      <div class="flex items-center">
        <div class="mr-10 flex flex-col">
          <img src="./assets/img/error/error.png" alt="" />
          <a
            href="https://www.flaticon.com/free-icons/error"
            class="text-slate-400 text-sm text-center mt-5"
            title="error icons"
            >Error icons created by Freepik - Flaticon</a
          >
        </div>
        <div>
          <div class="text-6xl font-bold mb-5">{{ error.statusCode }}...</div>
          <div class="text-indigo-600 font-bold">{{ error.message }}</div>
          <div>
            Don't worry, sometimes even we make mistakes. You can find plenty of
            other things on our homepage.
          </div>
          <button class="btn btn-purple mt-5 mr-3" @click="goHomepage()">
            Go Back to Homepage
          </button>
          <button
            class="btn btn-purple mt-5"
            @click="
              $router.back();
              goPreviousPage();
            "
          >
            Go Back to Previous Page
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const error = useError();

const goHomepage = () => {
  clearError({
    redirect: "/",
  });
};

const goPreviousPage = () => {
  clearError({});
};
</script>
