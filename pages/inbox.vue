<template>
  <div class="h-screen w-full bg-black text-white">
    <div class="h-10 w-full border-2 border-gray-500">
      <h1 class="text-center text-xl font-bold">Inbox</h1>
    </div>
    <div class=""></div>
    <div class=""></div>
    <Sidebar v-if="sidebarOpen" />

    <TabBarMenu :isOpen="sidebarOpen" @click="toggleSidebar" />
  </div>
</template>

<script>
import { defineNuxtComponent } from "nuxt/app";
import TabBarMenu from "~/components/TabBarMenu.vue";
import Sidebar from "~/components/Sidebar.vue";
export default defineNuxtComponent({
  components: {
    TabBarMenu,
    Sidebar,
  },
  data() {
    return {
      sidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
});
</script>

<style lang="scss" scoped></style>
