<template>
  <div class="mt-10">
    {{ user }}
    <h1 class="text-5xl font-bold mb-5">Login</h1>
    <button class="btn btn-primary" @click="login">Login with Google</button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const login = async () => {
  const { error } = supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    alert(error);
  }
};
</script>
