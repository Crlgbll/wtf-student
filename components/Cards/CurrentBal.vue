<template>
  <div
    class="h-48 w-[350px] lg:h-48 lg:w-96 absolute bg-gradient-to-tr from-black via-[#1F6562] to-[#49B0AD] rounded-2xl border-gray-500 border-2 p-3"
  >
    <div class="flex h-1/3 w-full">
      <img
        class="h-8 w-8 absolute top-3"
        src="~/assets/images/wtf-logo-white.png"
        alt=""
      />
    </div>
    <div class="flex h-32 w-full flex-col pb-4">
      <h1 class="text-lg">Your Current Balance</h1>
      <p class="text-7xl lg:text-6xl font-bold">₱{{ currentBalance }}</p>
      <p>{{ this.currentDate?.day + "/" + this.currentDate?.month }}</p>
      <img
        class="absolute right-5 bottom-3"
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
      currentDate: null,
      currentTime: null,
    };
  },
  async created() {
    await this.student();

    this.updateTime();
    // Update time every second (1000 milliseconds)
    setInterval(this.updateTime, 1000);
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

    updateTime() {
      const now = new Date();

      // Options for formatting date and time
      const dateFormatOptions = {
        month: "2-digit",
        day: "2-digit",
      };

      const timeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      };

      // Set current date
      const formattedDate = now.toLocaleDateString(
        undefined,
        dateFormatOptions
      );
      const dateParts = formattedDate.split("/");
      this.currentDate = {
        month: dateParts[0], // Corrected index for day
        day: dateParts[1], // Corrected index for month
      };

      // Set current time
      this.currentTime = now.toLocaleTimeString(undefined, timeFormatOptions);
    },
  },
};
</script>

<style lang="scss" scoped></style>

<style lang="scss" scoped></style>
