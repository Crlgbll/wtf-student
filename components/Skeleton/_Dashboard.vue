<template>
  <div
    class="h-full w-full bg-black text-white font-Poppins relative overflow-hidden"
  >
    <img
      class="h-1/3 w-full absolute"
      src="~/assets/images/dashboard-bg.png"
      alt=""
    />

    <div class="h-1/6 w-full relative flex flex-col">
      <div
        class="flex h-1/3 w-full pl-5 mt-5 items-center justify-between gap-2 animate-pulse"
      >
        <button
          class="h-12 w-12 rounded-full bg-[#3ED598] hover:scale-105 ease-in-out"
        ></button>
        <div class="h-8 w-28 bg-[#535252] rounded-full"></div>
        <div class="h-12 w-1/2 flex justify-end items-center">
          <h1
            class="h-8 w-24 text-sm rounded-full bg-[#252525] hover:bg-[#5CE199] text-[#5CE199] hover:text-[#252525] border-2 border-[#404040] flex justify-center items-center font-bold"
          ></h1>
        </div>
      </div>
      <div class="w-full h-1/2 p-4 animate-pulse">
        <div class="h-8 w-full bg-[#1F6562] rounded-full"></div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row h-[300px] w-full">
      <div class="flex flex-col h-44 xs:w-1/3 items-center relative">
        <Skeleton_CurrentBalance />
      </div>
      <div class="h-28 w-full flex justify-center items-center gap-4">
        <SkeletonLSGTotal />
        <Skeleton_TotalPaid />
      </div>
    </div>
    <Skeleton_Transactions />
    <LazySidebar v-if="sidebarOpen" />

    <TabBarMenu @click="toggleSidebar" />
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
});
</script>
<style lang="scss" scoped></style>
