<template>
  <div
    class="h-24 w-[165px] lg:h-48 lg:w-96 relative bg-[#1F1F1F] to-black rounded-2xl border-gray-700 border-2 flex"
  >
    <img
      class="h-8 w-8 rounded-full absolute top-7"
      src="~/assets/images/ccis-logo.png"
      alt=""
    />

    <div
      class="flex flex-col items-end h-full w-44 relative justify-end pr-3 pb-4"
    >
      <img
        class="h-4 w-4 absolute top-2 right-3"
        src="~/assets/images/wtf-logo-lightgreen.png"
        alt=""
      />
      <p class="text-xl lg:text-6xl font-bold text-[#A4A4A4]">
        ₱{{ totalPayment }}
      </p>
      <p class="text-[5px] text-end text-[#A9A8A8]">
        Total College fee amount <br />
        <span>being collected as of {{ currentDate }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalPayment: null,
      studentName: null,
      currentBalance: null,
      currentDate: null,
      currentTime: null,
    };
  },
  async created() {
    await this.totalCollection();
    await this.student();
    this.updateTime();
    // Update time every second (1000 milliseconds)
    setInterval(this.updateTime, 1000);
  },
  methods: {
    async totalCollection() {
      try {
        const response = await fetch(
          "https://wtf-backend-production.up.railway.app/api/get-total-payment/1"
        );
        const data = await response.json();
        this.totalPayment = data.total_payment;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
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
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      const timeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      };

      // Set current date
      this.currentDate = now.toLocaleDateString(undefined, dateFormatOptions);

      // Set current time
      this.currentTime = now.toLocaleTimeString(undefined, timeFormatOptions);
    },
  },
};
</script>

<style lang="scss" scoped></style>
