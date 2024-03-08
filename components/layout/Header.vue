<template>
  <header class="fixed top-0 w-full z-50" data-header>
    <div class="navbar relative px-0 max-w-screen-xl mx-auto">
      <div class="navbar-searchform gap-2" data-search-form>
        <ProductSearchInput />
        <a href="#" data-search-delete>x</a>
      </div>
      <div class="navbar-start md:hidden">
        <button class="btn btn-circle btn-search" data-search-icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div class="navbar-center md:navbar-start">
        <NuxtLink class="btn btn-ghost text-xl font-serif btn-logo px-0" to="/"
          >The Goodly</NuxtLink
        >
      </div>
      <div class="navbar-end gap-2">
        <ProductSearchInput class="hidden md:block" />
        <div class="dropdown dropdown-end" data-dropdown v-if="user">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <NuxtImg
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <NuxtLink class="justify-between" to="/profile/listings/">
                Profile
              </NuxtLink>
            </li>
            <li @click="logout"><a>Logout</a></li>
          </ul>
        </div>
        <div v-else>
          <NuxtLink to="/login">Login</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// 使用setup進行腳本設定時，可能會由於上下文不同而無法直接訪問window物件
// 確保DOM完全加載後再添加滾動事件監聽器
import { onMounted } from "vue";

onMounted(() => {
  window.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop;
    const headerElement = document.querySelector("[data-header]");

    if (headerElement) {
      headerElement.classList.toggle("bg-base-300", scrollTop > 30);
    }
  });

  const searchElement = document.querySelector("[data-search-icon]");
  const searchForm = document.querySelector("[data-search-form]");
  const delElement = document.querySelector("[data-search-delete]");
  const dropdownElement = document.querySelector("[data-dropdown]");
  searchElement.addEventListener("click", function () {
    searchForm.classList.add("is-active");
    dropdownElement.style.display = "none";
  });
  delElement.addEventListener("click", function (e) {
    e.preventDefault();
    searchForm.classList.remove("is-active");
    dropdownElement.style.display = "block";
  });
});

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const logout = () => {
  // 1. make user.value = null
  // 2. remove JWT from cookie
  // 3. navigate to homepage

  const { error } = supabase.auth.signOut();
  if (error) {
    alert(error);
  }
  navigateTo("/");
};
</script>
