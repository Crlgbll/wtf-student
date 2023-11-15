<template>
  <div
    class="h-40 w-[350px] lg:h-48 lg:w-96 bg-gradient-to-tr from-black via-[#1F6562] to-[#49B0AD] rounded-2xl border-gray-500 border-2 p-3"
  >
    <img
      class="h-5 w-5 absolute top-3"
      src="~/assets/images/wtf-logo-white.png"
      alt=""
    />

    <div class="flex h-[138px] w-full flex-col relative justify-end">
      <h1 class="text-base">Your Current Balance</h1>
      <p class="text-6xl lg:text-6xl font-bold">₱{{ currentBalance }}</p>
      <p class="text-xs"></p>
      <img
        class="absolute right-0 bottom-0"
        src="~/assets/images/circles.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentBalance: null,
    };
  },
  async created() {
    await this.student();
  },
  methods: {
    async student() {
      try {
        const response = await fetch(
          "https://wtf-backend-production.up.railway.app/api/search-student/211-00914"
        );

        const data = await response.json();

        if (response.status === 200 && data.message === "Student found") {
          this.studentName = data.student.first_name;
          this.currentBalance = data.student.balance;
        } else {
          console.error("Student not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
