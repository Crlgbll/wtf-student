<template>
  <div
    class="h-screen w-full bg-gradient-to-b from-black to-orange-500 font-Poppins text-white flex flex-col justify-center items-center"
  >
    <!-- Contents Container -->
    <div class="py-10 flex flex-col items-center z-50">
      <img class="h-20 w-20 mb-4" src="~/assets/images/ccis-logo.png" alt="" />

      <div class="mb-4 flex items-center">
        <img
          class="h-6 w-32 mr-2"
          src="~/assets/images/wtf-logo-gray.png"
          alt=""
        />
        <h1 class="font-bold text-xl mt-2">Select</h1>
      </div>

      <div class="flex gap-3">
        <button
          class="h-8 w-36 rounded-lg font-black bg-gradient-to-l from-green-950 to-green-400 hover:scale-105"
        >
          <NuxtLink to="/">Login</NuxtLink>
        </button>
        <button
          class="h-8 w-36 rounded-lg font-black border-2 border-yellow-500 hover:scale-105"
        >
          <NuxtLink
            to="/"
            class="bg-gradient-to-l from-green-700 to-green-400 text-transparent bg-clip-text"
          >
            Register
          </NuxtLink>
        </button>
      </div>
    </div>
  </div>
</template>
