<template>
  <div class="h-96 w-full overflow-y-auto animate-pulse">
    <div class="h-10 w-full flex justify-between my-2 px-6">
      <h1
        class="text-center font-bold text-2xl lg:text-4xl text-[#3ED598] bg-[#535252] h-8 w-16 rounded-full"
      ></h1>
      <Skeleton_DropdownFilter />
    </div>

    <div
      class="max-h-[500px] h-24 w-[350px] flex justify-center border-t-[1px] pt-3 border-[#5E5D5D] mx-auto"
    >
      <div
        class="h-14 w-14 lg:h-20 lg:w-20 rounded-full bg-green-400 pt-3 mt-1 mx-2"
      >
        <h1
          class="font-bold text-[10px] lg:text-sm flex flex-col items-center text-black lg:mt-2"
        >
          <span
            class="text-3xl lg:text-4xl h-7 pb-2 lg:pb-0 flex items-center"
          ></span>
        </h1>
      </div>
      <div class="h-16 lg:h-20 w-1/2 flex flex-col pl-3 leading-none gap-1">
        <h1
          class="text-[8px] lg:text-sm font-bold h-2 w-10 rounded-full bg-[#535252]"
        ></h1>
        <h1
          class="text-3xl lg:text-[40px] font-bold text-[#1EF581] h-6 w-24 rounded-full bg-[#535252]"
        ></h1>
        <p class="text-[8px] lg:text-sm h-2 w-10 rounded-full bg-[#535252]">
          <span class="text-[8px] lg:text-sm text-gray-500"></span>
        </p>
        <p
          class="text-[8px] lg:text-xs font-bold text-gray-500 mt-0.5 h-2 w-20 rounded-full bg-[#535252]"
        ></p>
      </div>
      <div class="h-16 w-1/4 flex flex-col items-end gap-2">
        <h1
          class="text-[10px] lg:text-sm font-bold text-gray-400 h-2 w-16 rounded-full bg-[#535252]"
        ></h1>
        <p
          class="text-gray-500 font-bold text-[8px] lg:text-xs h-2 w-10 rounded-full bg-[#535252]"
        ></p>
        <div
          class="h-5 w-12 lg:h-19 lg:w-14 bg-[#2F2F2F] rounded-full text-xs flex items-center justify-center"
        >
          <p class="text-[10px] text-center mt-0.5"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
