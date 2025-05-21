<template>
  <sidebar-layout>
    <div class="p-6 space-y-8">
      <h1 class="text-3xl font-bold text-gray-400">კომპონენტების ბიბლიოთეკა</h1>

      <!-- კომპიუტერის მოდელები -->
      <div class="rounded-xl shadow overflow-hidden">
        <button
            @click="accordion.modelOpen = !accordion.modelOpen"
            class="w-full px-6 py-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center text-lg font-medium text-gray-800"
        >
          <span>კომპიუტერი</span>
          <span class="text-gray-500">{{ accordion.modelOpen ? '−' : '+' }}</span>
        </button>
        <transition name="fade">
          <div v-if="accordion.modelOpen" class="bg-white">
            <table class="min-w-full text-sm text-left">
              <thead class="bg-gray-50 ">
              <tr>
                <th class="px-4 py-3">მოდელი</th>
                <th class="px-4 py-3">ბრენდი</th>
                <th class="px-4 py-3">ტიპი</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, i) in computerModels" :key="i" class=" hover:bg-gray-50">
                <td class="px-4 py-2">{{ item.model }}</td>
                <td class="px-4 py-2">{{ item.brand }}</td>
                <td class="px-4 py-2">{{ item.type }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </transition>
      </div>

      <!-- CPU მოდელები -->
      <div class="rounded-xl shadow overflow-hidden">
        <button
            @click="accordion.cpuOpen = !accordion.cpuOpen"
            class="w-full px-6 py-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center text-lg font-medium text-gray-800"
        >
          <span>CPU</span>
          <span class="text-gray-500">{{ accordion.cpuOpen ? '−' : '+' }}</span>
        </button>
        <transition name="fade">
          <div v-if="accordion.cpuOpen" class="bg-white">
            <table class="min-w-full text-sm text-left">
              <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3">მოდელი</th>
                <th class="px-4 py-3">ბრენდი</th>
                <th class="px-4 py-3">ბირთვები</th>
                <th class="px-4 py-3">სიხშირე</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, i) in cpuModels" :key="i" class=" hover:bg-gray-50">
                <td class="px-4 py-2">{{ item.model }}</td>
                <td class="px-4 py-2">{{ item.brand }}</td>
                <td class="px-4 py-2">{{ item.cores }}</td>
                <td class="px-4 py-2">{{ item.speed }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </transition>
      </div>

      <!-- RAM ვარიანტები -->
      <div class="rounded-xl shadow overflow-hidden">
        <button
            @click="accordion.ramOpen = !accordion.ramOpen"
            class="w-full px-6 py-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center text-lg font-medium text-gray-800"
        >
          <span>RAM</span>
          <span class="text-gray-500">{{ accordion.ramOpen ? '−' : '+' }}</span>
        </button>
        <transition name="fade">
          <div v-if="accordion.ramOpen" class="bg-white">
            <table class="min-w-full text-sm text-left">
              <thead class="bg-gray-50 ">
              <tr>
                <th class="px-4 py-3">ტიპი</th>
                <th class="px-4 py-3">სიხშირე</th>
                <th class="px-4 py-3">მოცულობა</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, i) in ramOptions" :key="i" class=" hover:bg-gray-50">
                <td class="px-4 py-2">{{ item.type }}</td>
                <td class="px-4 py-2">{{ item.speed }}</td>
                <td class="px-4 py-2">{{ item.size }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </transition>
      </div>
    </div>
  </sidebar-layout>
</template>

<script setup>
import { ref } from 'vue'
import SidebarLayout from '@/components/SidebarLayout.vue'

// აქ შეცვლილია!
const accordion = ref({
  modelOpen: false,
  cpuOpen: false,
  ramOpen: false
})

const computerModels = [
  { model: 'Optiplex 7010', brand: 'Dell', type: 'Mini Tower' },
  { model: 'ProDesk 600', brand: 'HP', type: 'Small Form Factor' },
  { model: 'ThinkCentre M720', brand: 'Lenovo', type: 'Tower' }
]

const cpuModels = [
  { model: 'i5-10400', brand: 'Intel', cores: 6, speed: '2.9GHz' },
  { model: 'Ryzen 5 5600G', brand: 'AMD', cores: 6, speed: '3.9GHz' },
  { model: 'i7-10700', brand: 'Intel', cores: 8, speed: '2.9GHz' }
]

const ramOptions = [
  { type: 'DDR4', speed: '2666MHz', size: '8GB' },
  { type: 'DDR4', speed: '3200MHz', size: '16GB' },
  { type: 'DDR5', speed: '4800MHz', size: '32GB' }
]
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  max-height: 0;
  transform: scaleY(0.95);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  max-height: 1000px;
  transform: scaleY(1);
}
</style>
