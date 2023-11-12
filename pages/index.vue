<template>
  <div
    class="h-screen w-full bg-black font-Poppins text-white flex flex-col justify-end"
  >
    <img
      class="h-screen w-full bg-fixed absolute"
      src="~/assets/images/landing-bg.png"
      alt=""
    />
    <div class="h-96 w-96 flex-col items-center z-50">
      <div class="flex h-20 w-full pl-9 pt-3">
        <div
          class="h-14 w-14 rounded-full bg-black relative flex items-center justify-center"
        >
          <img class="h-6 w-6" src="~/assets/images/wtf-logo.png" alt="" />
        </div>

        <img
          class="h-14 w-14 rounded-full"
          src="~/assets/images/ccis-logo.png"
          alt=""
        />
      </div>
      <div class="px-9 gap-5 flex flex-col">
        <h1 class="font-bold text-black text-4xl">
          Start monitoring your balance!
        </h1>
        <p class="text-[13px] text-black">
          You can also check the total amount collected in your college for
          transparency, including <br />
          the fees you paid
        </p>
      </div>
      <div class="h-28 w-full flex items-end pl-9">
        <button
          class="h-10 w-28 bg-black font-bold rounded-lg hover:bg-white hover:text-black ease-in-out hover:scale-105"
        >
          <NuxtLink to="/register">
            Start <icon name="ic:round-arrow-forward"></icon
          ></NuxtLink>
        </button>
      </div>
    </div>
  </div>
</template>
<style></style>
