<template>
  <sidebar-layout>
  <div class="p-7">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <div class="flex flex-col sm:flex-row gap-3 w-full">
        <!-- Search -->
        <div class="relative w-full sm:w-72">
          <input
              v-model="searchQuery"
              type="text"
              placeholder="🔍 ძებნა"
              class="w-full pl-10 pr-4 py-2 m rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>

        <!-- Status Filter -->
        <div class="w-full sm:w-48">
          <select
              v-model="statusFilter"
              class="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="ყველა">ყველა სტატუსი</option>
            <option value="შევსებული">შევსებული</option>
            <option value="შესავსები">შესავსები</option>
          </select>
        </div>
      </div>
      <h1 class="text-2xl font-semibold text-gray-400 hidden md:block">თანამშრომლები</h1>
    </div>
    <!-- Table -->
    <div class="overflow-x-auto bg-white shadow-md rounded-xl">
      <table class="min-w-full divide-y divide-gray-200 text-sm text-gray-800">
        <thead class="bg-blue-50 text-gray-700 text-sm font-semibold">
        <tr>
          <th class="px-6 py-3 text-left">სახელი</th>
          <th class="px-6 py-3 text-left">გვარი</th>
          <th class="px-6 py-3 text-left">ფილიალი</th>
          <th class="px-6 py-3 text-left">ტელეფონი</th>
          <th class="px-6 py-3 text-left">ელ.ფოსტა</th>
          <th class="px-6 py-3 text-left">სტატუსი</th>
          <th class="px-6 py-3 text-center">მოქმედება</th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
        <tr
            v-for="employee in filteredEmployees"
            :key="employee.id"
            class="hover:bg-gray-50 transition duration-150 ease-in-out"
        >
          <td class="px-6 py-3">{{ employee.firstName }}</td>
          <td class="px-6 py-3">{{ employee.lastName }}</td>
          <td class="px-6 py-3">{{ employee.branch }}</td>
          <td class="px-6 py-3">{{ employee.phone }}</td>
          <td class="px-6 py-3">{{ employee.email }}</td>
          <td class="px-6 py-3">
          <span
              :class="[ 'px-2 py-1 rounded-full text-xs font-semibold',
              employee.status === 'შევსებული'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            ]"
          >
            {{ employee.status }}
          </span>
          </td>
          <td class="px-6 py-3 text-center">
            <RouterLink
                :to="`/employees/${employee.id}`"
                class="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-xs font-medium hover:bg-blue-200 transition"
            >
              ინფორმაცია
            </RouterLink>
          </td>
        </tr>
        <tr v-if="filteredEmployees.length === 0">
          <td colspan="7" class="text-center text-gray-500 px-6 py-6">
            შედეგი ვერ მოიძებნა
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
  </sidebar-layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import SidebarLayout from "@/components/SidebarLayout.vue";



// სიმულაციური მონაცემები
const employees = ref([
  {
    id: 1,
    firstName: 'გიორგი',
    lastName: 'აბაშიძე',
    branch: 'თბილისი',
    phone: '555-123-456',
    email: 'giorgi@example.com',
    status: 'შევსებული'
  },
  {
    id: 2,
    firstName: 'მარიამი',
    lastName: 'გელაშვილი',
    branch: 'ბათუმი',
    phone: '555-987-654',
    email: 'mariam@example.com',
    status: 'შესავსები'
  },
  {
    id: 3,
    firstName: 'ნიკა',
    lastName: 'მელიქიძე',
    branch: 'ქუთაისი',
    phone: '555-222-333',
    email: 'nika@example.com',
    status: 'შევსებული'
  }
])

// ფილტრაცია
const searchQuery = ref('')
const statusFilter = ref('ყველა') // დამატებულია

const filteredEmployees = computed(() => {
  const q = searchQuery.value.toLowerCase()
  return employees.value.filter((e) => {
    const matchesSearch =
        e.firstName.toLowerCase().includes(q) ||
        e.lastName.toLowerCase().includes(q) ||
        e.branch.toLowerCase().includes(q) ||
        e.phone.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q)

    const matchesStatus =
        statusFilter.value === 'ყველა' || e.status === statusFilter.value

    return matchesSearch && matchesStatus
  })
})


// ღილაკის ფუნქცია
const showInfo = (employee) => {
  alert(`დეტალური ინფორმაცია:\n${employee.firstName} ${employee.lastName}`)
}
</script>
