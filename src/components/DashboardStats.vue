<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
    <div class="bg-white rounded-lg shadow p-6 text-center">
      <h3 class="text-gray-600 gigi">თანამშრომლების რაოდენობა</h3>
      <p class="text-3xl font-bold text-blue-600">{{ totalEmployees }}</p>
    </div>

    <div class="bg-white rounded-lg shadow p-6 text-center">
      <h3 class="text-gray-600">დასრულებული</h3>
      <p class="text-3xl font-bold text-green-600">{{ countedComputers }}</p>
    </div>

    <div class="bg-white rounded-lg shadow p-6 text-center">
      <h3 class="text-gray-600">დასამუშავებელი</h3>
      <p class="text-3xl font-bold text-red-600">{{ missingComputers }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const employees = ref([])

onMounted(() => {
  // ტესტის მონაცემები — ჩაანაცვლე API-ით
  employees.value = [
    { id: 1, name: 'გიორგი', computer: { model: 'Dell' } },
    { id: 2, name: 'ნიკა', computer: null },
    { id: 3, name: 'თამარ', computer: { model: 'HP' } },
    { id: 4, name: 'სალომე', computer: null },
  ]
})

const totalEmployees = computed(() => employees.value.length)

const countedComputers = computed(() =>
    employees.value.filter(e => e.computer !== null).length
)

const missingComputers = computed(() =>
    employees.value.filter(e => e.computer === null).length
)
</script>
