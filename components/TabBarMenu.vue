<template>
  <div
    class="h-16 w-full border-2 border-gray-500 bg-[#202020] rounded-t-3xl fixed bottom-0 z-50 ease-in-out"
  >
    <div
      class="h-full max-w-lg mx-auto relative flex justify-evenly items-center"
    >
      <button
        class="h-14 w-14 rounded-full hover:bg-gray-600"
        @click="emitToggleSidebarEvent"
      >
        <icon class="h-6 w-6" name="fa6-solid:user"></icon>
      </button>
      <button
        class="h-14 w-14 bg-[#3DD598] text-center rounded-full hover:bg-gray-700 transition-transform ease-in-out"
      >
        <nuxt-link to="/dashboard" @click="handleNotificationClick">
          <icon name="fa6-solid:house"></icon>
        </nuxt-link>
      </button>
      <button
        class="h-14 w-14 rounded-full hover:bg-gray-600"
        @click="handleNotificationClick"
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
  methods: {
    emitToggleSidebarEvent() {
      this.$emit("toggleSidebar");
    },
    handleNotificationClick(event) {
      event.stopPropagation(); // This stops the event from propagating up
      // Your existing logic or additional logic here
    },
  },
});
</script>

<style lang="scss" scoped></style>
