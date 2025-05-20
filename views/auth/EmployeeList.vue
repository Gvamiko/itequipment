<template>
  <sidebar-layout>
  <div class="p-4">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
      <div class="flex flex-col md:flex-row gap-2 w-full md:w-auto">
        <input
            v-model="searchQuery"
            type="text"
            placeholder="ძებნა"
            class="w-full md:w-64 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
            v-model="statusFilter"
            class="w-full md:w-48 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="ყველა">ყველა სტატუსი</option>
          <option value="შევსებული">შევსებული</option>
          <option value="შევსებული">შევსებული</option>
          <option value="შესავსები">შესავსები</option>
        </select>
      </div>
      <h1 class="text-2xl font-semibold text-gray-800 hidden md:block">თანამშრომლების სია</h1>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto bg-white shadow rounded-lg">
      <table class="min-w-full text-sm text-gray-800">
        <thead class="bg-gray-100 text-left">
        <tr>
          <th class="px-4 py-3">სახელი</th>
          <th class="px-4 py-3">გვარი</th>
          <th class="px-4 py-3">ფილიალი</th>
          <th class="px-4 py-3">ტელეფონი</th>
          <th class="px-4 py-3">ელ.ფოსტა</th>
          <th class="px-4 py-3">სტატუსი</th>
          <th class="px-4 py-3 text-center">მოქმედება</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="employee in filteredEmployees"
            :key="employee.id"
            class="border-t hover:bg-gray-50 transition"
        >
          <td class="px-4 py-2">{{ employee.firstName }}</td>
          <td class="px-4 py-2">{{ employee.lastName }}</td>
          <td class="px-4 py-2">{{ employee.branch }}</td>
          <td class="px-4 py-2">{{ employee.phone }}</td>
          <td class="px-4 py-2">{{ employee.email }}</td>
          <td class="px-4 py-2">
              <span
                  :class="[
                  'px-2 py-1 rounded-full text-xs font-medium',
                  employee.status === 'შევსებული'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                ]"
              >
                {{ employee.status }}
              </span>
          </td>
          <td class="px-4 py-2 text-center">
            <RouterLink
                :to="`/employees/${employee.id}`"
                class="text-blue-600 hover:underline font-medium"
            >
              ინფორმაცია
            </RouterLink>
          </td>
        </tr>
        <tr v-if="filteredEmployees.length === 0">
          <td colspan="7" class="text-center text-gray-500 px-4 py-6">
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
