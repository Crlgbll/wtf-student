<template>
  <div class="h-screen w-full bg-black text-white">
    <div class="h-10 w-fullrounded-b-lg">
      <h1 class="text-center font-bold text-xl">Transactions</h1>
    </div>
    <div class=""></div>
    <div
      class="h-[70px] w-full flex"
      v-for="payment in paymentData"
      :key="payment.ar_no"
    >
      <div class="h-14 w-14 rounded-full bg-green-400 pt-3 mt-1 mx-2">
        <h1 class="font-bold text-[10px] flex flex-col items-center text-black">
          {{ month(payment.created_at) + " " + year(payment.created_at) }}
          <span class="text-3xl h-7 pb-2 flex items-center">{{
            day(payment.created_at)
          }}</span>
        </h1>
      </div>
      <div class="h-16 w-1/2 flex flex-col pl-3 leading-none">
        <h1 class="text-[8px] font-bold">A.R. Number: {{ payment.ar_no }}</h1>
        <h1 class="text-3xl font-bold text-[#1EF581]">₱{{ payment.amount }}</h1>
        <p class="text-[8px]">
          Collected by {{ payment.first_name + " " + payment.last_name }}
          <span class="text-[8px] text-gray-500">{{ payment.position }}</span>
        </p>
        <p class="text-[8px] text-gray-500 mt-0.5">
          <span class="text-[#1EF581]"
            ><icon class="h-2 w-2" name="fa6-regular:clock"></icon>
          </span>
          {{ time(payment.created_at) }}
        </p>
      </div>
      <div class="h-16 w-1/4 flex flex-col items-end">
        <h1 class="text-[10px] font-bold text-gray-400">
          {{ payment.semester_name }}
        </h1>
        <p class="text-gray-500 font-bold text-[8px]">
          A.Y. {{ payment.acad_year }}
        </p>
        <div
          class="h-5 w-12 bg-[#2F2F2F] text-[#FFFB93] rounded-sm text-xs mt-3 items-center"
        >
          <p class="text-[10px] text-center mt-0.5">{{ payment.desc }}</p>
        </div>
      </div>
    </div>

    <TabBarMenu />
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentData: [],
    };
  },
  async mounted() {
    await this.transaction();
  },
  methods: {
    async transaction() {
      try {
        const response = await fetch(
          "https://wtf-backend-production.up.railway.app/api/student-logs/211-00914"
        );
        const data = await response.json();
        console.log(data);
        if (
          response.status === 200 &&
          data.message === "Payment retrieved" &&
          data.payments.length > 0
        ) {
          this.paymentData = data.payments;
          console.log(this.paymentData);
        } else {
          console.error("Payment not found");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    },
  },
  computed: {
    month() {
      return (dateTimeString) =>
        new Date(dateTimeString).toLocaleString("default", { month: "short" });
    },
    day() {
      return (dateTimeString) => new Date(dateTimeString).getDate();
    },
    year() {
      return (dateTimeString) => new Date(dateTimeString).getFullYear();
    },
    time() {
      return (dateTimeString) => new Date(dateTimeString).toLocaleTimeString();
    },
  },
};
</script>

<style lang="scss" scoped></style>
