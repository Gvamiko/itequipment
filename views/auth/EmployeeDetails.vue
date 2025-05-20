<template>
  <sidebar-layout>
  <div v-if="employee" class="space-y-6">
    <h2 class="text-2xl font-semibold text-gray-800">
      თანამშრომელი: {{ employee.firstName }} {{ employee.lastName }}
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
      <div class="bg-white p-4 rounded shadow">
        <h3 class="font-semibold mb-2">კომპიუტერის მონაცემები</h3>
        <p><strong>მოდელი:</strong> {{ employee.computer.model }}</p>
        <p><strong>CPU:</strong> {{ employee.computer.cpu }}</p>
        <p><strong>RAM:</strong> {{ employee.computer.ram }}</p>
        <p><strong>მყარ დისკი:</strong> {{ employee.computer.disk }}</p>
      </div>

      <!-- ქსელის ინფორმაცია -->
      <div class="bg-white p-4 rounded shadow md:col-span-2">
        <h3 class="font-semibold mb-2">ქსელის ინფორმაცია</h3>
        <p><strong>IP:</strong> {{ employee.network.ip }}</p>
        <p><strong>MAC:</strong> {{ employee.network.mac }}</p>
        <p><strong>ქსელი:</strong> {{ employee.network.subnet }}</p>
      </div>
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

</script>
