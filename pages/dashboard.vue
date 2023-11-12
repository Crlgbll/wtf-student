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
      <div class="flex h-1/3 w-full pl-5 mt-5 items-center gap-2">
        <button
          class="h-12 w-12 rounded-full bg-[#3ED598] hover:scale-105 ease-in-out"
        >
          <icon name="fluent-emoji-flat:boy-light"></icon>
        </button>
        <div class="flex flex-col justify-center">
          <h1 class="font-bold">
            {{ studentData.first_name + " " + studentData.last_name }}
          </h1>
          <p class="text-xs">{{ studentData?.program?.program_name }}</p>
        </div>
        <div class="h-12 w-1/2 flex justify-end items-center">
          <h1
            class="h-8 w-24 text-sm rounded-full bg-[#252525] hover:bg-[#5CE199] text-[#5CE199] hover:text-[#252525] border-2 border-[#404040] flex justify-center items-center font-bold"
          >
            {{ studentData.student_id }}
          </h1>
        </div>
      </div>
      <div class="w-full h-1/2 z-50 p-4">
        <h1 class="text-md lg:text-3xl font-bold">
          Check your current balance and updates
        </h1>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row">
      <div class="flex flex-col h-3/4 xs:w-1/3 gap-5 items-center relative">
        <CardsCurrentBal />
      </div>
      <div class="h-3/4 xs:w-3/4 mt-40 flex justify-center gap-3">
        <CardsLSGTotal />
        <CardsTotalPaid />
      </div>
    </div>
    <Transactions />
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
      studentData: [],
    };
  },
  async created() {
    await this.student_cred();
  },
  methods: {
    async student_cred() {
      try {
        const response = await fetch(
          "https://wtf-backend-production.up.railway.app/api/search-student/211-00914"
        );
        const data = await response.json();
        if (response.status === 200 && data.message === "Student found") {
          this.studentData = data.student;
        } else {
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
});
</script>

<style lang="scss" scoped></style>
