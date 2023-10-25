<template>
  <div
    class="h-screen w-full bg-gradient-to-b from-black to-orange-500 font-Poppins text-white flex flex-col items-center justify-center relative"
  >
    <img
      class="h-8 w-80 absolute top-10 left-10"
      src="~/assets/images/wtf-logo-white.png"
      alt="WTF Logo"
    />

    <div
      class="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 mt-6 p-10 bg-black rounded-xl"
    >
      <h1 class="text-4xl font-bold mb-10 text-center">Register</h1>
      <form class="flex flex-col gap-4">
        <div class="flex flex-col sm:flex-row gap-5">
          <input
            v-for="field in nameFields"
            :key="field.key"
            type="text"
            :id="field.id"
            class="w-full sm:w-1/2 bg-white/0 border-2 border-green-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            :placeholder="field.placeholder"
            required
          />
        </div>

        <input
          v-for="field in inputFields"
          :key="field.key"
          type="text"
          :id="field.id"
          class="w-full bg-white/0 border-2 border-green-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
          :placeholder="field.placeholder"
          required
        />

        <button class="h-12 w-32 bg-green-500 rounded-xl self-end mt-6">
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameFields: [
        { id: "first_name", placeholder: "First Name", key: "firstName" },
        { id: "last_name", placeholder: "Last Name", key: "lastName" },
      ],
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
