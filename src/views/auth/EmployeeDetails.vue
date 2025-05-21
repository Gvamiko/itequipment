<template>
  <sidebar-layout>
  <div v-if="employee" class="space-y-6">
    <h2 class="text-2xl font-semibold text-gray-400">
      {{ employee.firstName }} {{ employee.lastName }}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- პერსონალური ინფორმაცია -->
      <div class="bg-white p-4 rounded shadow">
        <h3 class="font-semibold mb-2">პერსონალური ინფორმაცია</h3>
        <p><strong>ელ.ფოსტა:</strong> {{ employee.email }}</p>
        <p><strong>ტელეფონი:</strong> {{ employee.phone }}</p>
        <p><strong>ფილიალი:</strong> {{ employee.branch }}</p>
        <p><strong>სტატუსი:</strong> {{ employee.status }}</p>
      </div>

      <!-- კომპიუტერის მონაცემები -->
      <!-- კომპიუტერის მონაცემები -->
      <div class="bg-white p-4 rounded shadow">
        <h3 class="font-semibold mb-4 text-gray-700">კომპიუტერის მონაცემები</h3>

        <div class="space-y-3">
          <!-- მოდელი -->
          <div>
            <label class="block text-sm text-gray-600 mb-1">მოდელი</label>
            <select
                v-model="employee.computer.model"
                class="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option v-for="model in models" :key="model" :value="model">{{ model }}</option>
            </select>
          </div>

          <!-- CPU -->
          <div>
            <label class="block text-sm text-gray-600 mb-1">CPU</label>
            <select
                v-model="employee.computer.cpu"
                class="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option v-for="cpu in cpus" :key="cpu" :value="cpu">{{ cpu }}</option>
            </select>
          </div>

          <!-- RAM -->
          <div>
            <label class="block text-sm text-gray-600 mb-1">RAM</label>
            <select
                v-model="employee.computer.ram"
                class="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option v-for="ramOption in ramOptions" :key="ramOption" :value="ramOption">{{ ramOption }}</option>
            </select>
          </div>

          <!-- მყარი დისკი -->
          <div>
            <label class="block text-sm text-gray-600 mb-1">მყარი დისკი</label>
            <select
                v-model="employee.computer.disk"
                class="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option v-for="disk in disks" :key="disk" :value="disk">{{ disk }}</option>
            </select>
          </div>
        </div>
      </div>


      <!-- ქსელის ინფორმაცია -->
      <!-- ქსელის ინფორმაცია -->
      <div class="bg-white p-4 rounded shadow md:col-span-2">
        <h3 class="font-semibold mb-4 text-gray-700">ქსელის ინფორმაცია</h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- MAC -->
          <div>
            <label class="block text-sm text-gray-600 mb-1">MAC მისამართი</label>
            <input
                v-model="employee.network.mac"
                type="text"
                placeholder="მაგ: 00:1A:2B:3C:4D:5E"
                class="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>
      </div>

    </div>
    <div class="text-right mt-6">
      <button
          @click="saveEmployee"
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg shadow"
      >
        შენახვა
      </button>
    </div>
  </div>


  <div v-else class="text-center text-gray-500 py-10">მონაცემი ვერ მოიძებნა...</div>
  </sidebar-layout>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import SidebarLayout from "@/components/SidebarLayout.vue";

const route = useRoute()
const employee = ref(null)

const dummyData = [
  {
    id: 1,
    firstName: 'გიორგი',
    lastName: 'აბაშიძე',
    branch: 'თბილისი',
    phone: '555-123-456',
    email: 'giorgi@example.com',
    status: 'შევსებული',
    computer: {
      model: 'Dell Optiplex 7010',
      cpu: 'Intel i5-10400',
      ram: '16GB',
      disk: '512GB SSD'
    },
    network: {
      ip: '192.168.1.101',
      mac: '00:1A:2B:3C:4D:5E',
      subnet: '255.255.255.0'
    }
  },
  // სხვა თანამშრომლები
]

onMounted(() => {
  const id = Number(route.params.id)
  const found = dummyData.find(e => e.id === id)
  if (found) employee.value = found
})
const models = ref(['Dell Optiplex 7010', 'HP ProDesk 600', 'Lenovo ThinkCentre M720'])
const cpus = ref(['Intel i5-10400', 'Intel i7-9700', 'AMD Ryzen 5 3600'])
const ramOptions = ref(['4GB','8GB', '16GB', '32GB'])
const disks = ref(['256GB SSD', '512GB SSD', '1TB HDD'])
</script>
