<template>
  <div class="h-full w-52 bg-[#1A1919] absolute top-0 left-0 z-10">
    <div class="flex h-1/3 w-full pl-5 pt-6 items-start gap-2">
      <button
        class="h-12 w-12 rounded-full bg-[#3ED598] hover:scale-105 ease-in-out"
      >
        <icon name="fluent-emoji-flat:boy-light"></icon>
      </button>
      <div class="flex flex-col justify-center">
        <h1 class="font-bold">
          {{ studentData?.first_name + " " + studentData?.last_name }}
        </h1>
        <p class="text-xs">{{ studentData?.program?.program_name }}</p>
      </div>
    </div>
    <div class="flex flex-col items-start px-5 gap-3">
      <button class="text-[#96A7AF]">
        <icon name="material-symbols:settings"></icon> Settings
      </button>
      <button
        class="font-bold h-10 w-24 bg-[#40DF9F] text-[#006C68] hover:bg-[#006C68] hover:text-[#40DF9F] rounded-xl"
      >
        Logout
      </button>
    </div>
    <div class=""></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  },
};
</script>

<style lang="scss" scoped></style>
