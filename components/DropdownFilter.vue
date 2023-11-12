<template>
  <div class="relative inline-block text-left">
    <button
      @click="toggleDropdown"
      type="button"
      class="h-10 w-[120px] inline-flex justify-center items-center rounded-md border border-[#5E5D5D] shadow-sm px-4 py-2 text-sm bg-[#353535] font-bold hover:bg-gray-50 hover:text-[#353535] focus:outline-none focus:ring-2"
    >
      Sort By <icon name="ic:sharp-keyboard-arrow-down"></icon>
    </button>

    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        @click="toggleDropdown"
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
      >
        <div
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option)"
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            {{ option.label }}
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      selectedOption: { label: "Default", value: "default" },
      options: [
        { label: "Default", value: "default" },
        { label: "Name (A-Z)", value: "name-asc" },
        { label: "Name (Z-A)", value: "name-desc" },
        // Add more sorting options as needed
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
      // Add logic to trigger sorting based on the selected option
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
