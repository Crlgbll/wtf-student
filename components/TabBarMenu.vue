<template>
  <div
    class="h-16 w-full border-2 border-gray-500 bg-[#202020] rounded-t-3xl fixed bottom-0 z-20 ease-in-out"
    @clcik.stop
  >
    <div
      class="h-full max-w-lg mx-auto relative flex justify-evenly items-center"
    >
      <button
        class="h-14 w-14 rounded-full hover:bg-gray-600"
        :class="{ 'bg-[#3DD598]': activeButton === 'user' }"
        @click="setActiveButton('user')"
      >
        <icon class="h-6 w-6" name="fa6-solid:user"></icon>
      </button>
      <button
        class="h-14 w-14 text-center rounded-full hover:bg-gray-700 transition-transform ease-in-out"
        :class="{ 'bg-[#3DD598]': activeButton === 'dashboard' }"
        @click="setActiveButton('dashboard')"
      >
        <nuxt-link to="/dashboard" @click="handleNotificationClick">
          <icon name="fa6-solid:house"></icon>
        </nuxt-link>
      </button>
      <button
        class="h-14 w-14 rounded-full hover:bg-gray-600"
        :class="{ 'bg-[#3DD598]': activeButton === 'inbox' }"
        @click="setActiveButton('inbox')"
      >
        <nuxt-link to="/inbox">
          <icon
            class="h-18 w-8"
            name="material-symbols-light:notifications"
          ></icon>
        </nuxt-link>
      </button>
    </div>
  </div>
</template>

<script>
import { defineNuxtComponent } from "nuxt/app";
export default defineNuxtComponent({
  setup() {
    const activeButton = ref(null);

    const setActiveButton = (button) => {
      activeButton.value = button;
    };

    const emitToggleSidebarEvent = () => {
      this.$emit("toggleSidebar");
      console.log("toggleSidebar");
    };

    const handleNotificationClick = (event) => {
      this.$emit("click");
    };

    return {
      activeButton,
      setActiveButton,
      emitToggleSidebarEvent,
      handleNotificationClick,
    };
  },
});
</script>

<style lang="scss" scoped></style>
