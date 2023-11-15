<template>
  <div
    class="h-24 w-[165px] lg:h-48 lg:w-96 relative bg-[#1F1F1F] rounded-2xl border-gray-700 border-2"
  >
    <img
      class="h-4 w-4 absolute right-3 top-2"
      src="~/assets/images/wtf-logo-lightgreen.png"
      alt=""
    />

    <div class="flex flex-col justify-end items-end h-[85px] w-full px-2 pb-4">
      <p class="text-xl lg:text-6xl text-center text-[#A4A4A4] font-bold">
        ₱{{ totalPaid }}
      </p>
      <p class="text-[5px] text-[#A9A8A8]">
        Total Amount Paid as of {{ currentDate }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalPaid: null,
      currentDate: null,
      currentTime: null,
    };
  },
  async created() {
    await this.studentTotalPaid();
    this.updateTime();
    // Update time every second (1000 milliseconds)
    setInterval(this.updateTime, 1000);
  },
  methods: {
    async studentTotalPaid() {
      try {
        const response = await fetch(
          "https://wtf-backend-production.up.railway.app/api/get-total-student-payment/211-00914"
        );
        const data = await response.json();

        if (
          response.status === 200 &&
          data.message === "Total payment retrieve of student"
        ) {
          this.totalPaid = data.total_payment;
        } else {
        }
      } catch (error) {}
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
