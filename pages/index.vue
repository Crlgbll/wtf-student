<template>
  <div
    class="h-screen w-full bg-black font-Poppins text-white flex flex-col justify-center items-center"
  >
    <img
      class="h-screen w-full bg-fixed absolute"
      src="~/assets/images/login-bg.png"
      alt=""
    />
    <div class="py-10 flex flex-col items-center z-50">
      <img class="h-20 w-20 mb-4" src="~/assets/images/ccis-logo.png" alt="" />

      <div class="mb-4 flex w-full justify-between items-center">
        <img
          class="h-6 w-36 mr-2"
          src="~/assets/images/wtf-logo-gray.png"
          alt=""
        />
        <h1 class="font-bold text-xl mt-2">Select</h1>
      </div>

      <div class="flex gap-3">
        <button
          class="h-9 w-32 p-1 text-lg rounded-lg font-black bg-gradient-to-l from-green-800 to-green-400 hover:scale-105 justify-around flex flex-row"
        >
          <NuxtLink to="/login">Login</NuxtLink>
          <Icon class="h-7 w-7" name="ph:arrow-up-right-bold" />
        </button>
        <button
          class="h-9 w-32 p-1 text-lg rounded-lg font-black border-2 border-yellow-500 hover:scale-105 justify-around flex flex-row"
        >
          <NuxtLink
            to="/register"
            class="bg-gradient-to-r from-green-600 to-green-300 text-transparent bg-clip-text"
          >
            Register
          </NuxtLink>
          <Icon class="h-7 w-7" name="ph:arrow-up-right-bold" />
        </button>
      </div>
    </div>
  </div>
</template>
<style></style>
