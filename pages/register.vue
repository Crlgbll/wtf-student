<template>
  <div
    class="h-screen w-full bg-gradient-to-b from-black to-orange-500 font-Poppins text-white"
  >
    <img
      class="h-8 w-80 mt- px-10"
      src="~/assets/images/wtf-logo-white.png "
      alt=""
    />
    <div class="sm:w-2/3 lg:w-1/2 mx-auto p-10 bg-black">
      <h1 class="text-4xl font-bold mb-10 text-center">Register</h1>
      <form>
        <div class="flex flex-col mb-6 sm:flex-row">
          <div class="mb-4 sm:mb-0 sm:mr-4">
            <input
              type="text"
              id="first_name"
              class="w-full sm:w-80 bg-white/0 border-2 border-green-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="last_name"
              class="w-full sm:w-80 bg-white/0 border-2 border-green-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div v-for="field in inputFields" :key="field.key">
          <input
            type="text"
            :id="field.id"
            class="w-[655px] my-6 bg-white/0 border-2 border-green-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            :placeholder="field.placeholder"
            required
          />
        </div>
        <button class="h-12 w-32 bg-green-500">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputFields: [
        { id: "student_id", placeholder: "Student ID", key: "studentId" },
        { id: "password", placeholder: "Password", key: "password" },
        {
          id: "confirm_password",
          placeholder: "Confirm Password",
          key: "confirmPassword",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* You can add custom styles for responsiveness here if needed */
</style>
