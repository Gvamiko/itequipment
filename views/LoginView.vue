<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">შესვლა</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-medium mb-1">ელფოსტა</label>
          <input
              type="email"
              id="email"
              v-model="email"
              class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
          />
        </div>

        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-medium mb-1">პაროლი</label>
          <input
              type="password"
              id="password"
              v-model="password"
              class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
          />
        </div>

        <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-200"
        >
          შესვლა
        </button>
      </form>

      <p class="text-center text-sm text-gray-600 mt-4">
        არ გაქვთ ანგარიში?
        <a href="#" class="text-blue-600 hover:underline">რეგისტრაცია</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const login = () => {
  // აქ დაამატე შენი ავტორიზაციის ლოგიკა
  console.log('შეყვანილი ელფოსტა:', email.value)
  console.log('შეყვანილი პაროლი:', password.value)
}
</script>

<style scoped>
/* აქ შეგიძლია დაამატო FlyonUI-ს custom კლასი, თუ გსურს */
</style>

