<template>
  <div class="h-96 w-full overflow-y-auto">
    <div class="h-10 w-full flex justify-between my-2 px-6">
      <h1 class="text-center font-bold text-2xl lg:text-4xl text-[#3ED598]">
        Logs
      </h1>
      <DropdownFilter />
    </div>

    <div
      class="max-h-[500px] h-24 w-[350px] flex justify-center border-t-[1px] pt-3 border-[#5E5D5D] mx-auto"
      v-for="payment in paymentData"
      :key="payment.ar_no"
    >
      <div
        class="h-14 w-14 lg:h-20 lg:w-20 rounded-full bg-green-400 pt-3 mt-1 mx-2"
      >
        <h1
          class="font-bold text-[10px] lg:text-sm flex flex-col items-center text-black lg:mt-2"
        >
          {{ month(payment.created_at) + " " + year(payment.created_at) }}
          <span
            class="text-3xl lg:text-4xl h-7 pb-2 lg:pb-0 flex items-center"
            >{{ day(payment.created_at) }}</span
          >
        </h1>
      </div>
      <div class="h-16 lg:h-20 w-1/2 flex flex-col pl-3 leading-none">
        <h1 class="text-[8px] lg:text-sm font-bold">
          A.R. Number: {{ payment.ar_no }}
        </h1>
        <h1 class="text-3xl lg:text-[40px] font-bold text-[#1EF581]">
          ₱{{ payment.amount }}
        </h1>
        <p class="text-[8px] lg:text-sm">
          Collected by {{ payment.first_name + " " + payment.last_name }}
          <span class="text-[8px] lg:text-sm text-gray-500">{{
            payment.position
          }}</span>
        </p>
        <p class="text-[8px] lg:text-xs font-bold text-gray-500 mt-0.5">
          <span class="text-[#1EF581]"
            ><icon
              class="h-2 w-2 lg:h-3 lg:w-3"
              name="fa6-regular:clock"
            ></icon>
          </span>
          {{ time(payment.created_at) }}
        </p>
      </div>
      <div class="h-16 w-1/4 flex flex-col items-end">
        <h1 class="text-[10px] lg:text-sm font-bold text-gray-400">
          {{ payment.semester_name }}
        </h1>
        <p class="text-gray-500 font-bold text-[8px] lg:text-xs">
          A.Y. {{ payment.acad_year }}
        </p>
        <div
          :class="[
            'h-5 w-12 lg:h-19 lg:w-14 bg-[#2F2F2F] rounded-sm text-xs flex items-center justify-center',
            payment.desc === 'full' ? 'text-green-400' : 'text-yellow-400',
          ]"
        >
          <p class="text-[10px] text-center mt-0.5">{{ payment.desc }}</p>
        </div>
      </div>
    </div>
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
        if (
          response.status === 200 &&
          data.message === "Payment retrieved" &&
          data.payments.length > 0
        ) {
          this.paymentData = data.payments;
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
