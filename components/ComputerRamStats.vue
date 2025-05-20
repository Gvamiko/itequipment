<template>
  <div class="bg-white rounded-lg shadow p-6">
    <h3 class="text-lg font-semibold text-gray-700 mb-4">RAM ანალიზი</h3>

    <div class="space-y-4">
      <div class="flex justify-between text-sm text-gray-600">
        <span>4GB RAM</span>
        <span>{{ ram4Count }} ({{ ram4Percent }}%)</span>
      </div>
      <div class="w-full bg-gray-200 h-3 rounded">
        <div
            class="bg-red-500 h-3 rounded"
            :style="{ width: ram4Percent + '%' }"
        />
      </div>

      <div class="flex justify-between text-sm text-gray-600">
        <span>> 4GB RAM</span>
        <span>{{ ramMoreCount }} ({{ ramMorePercent }}%)</span>
      </div>
      <div class="w-full bg-gray-200 h-3 rounded">
        <div
            class="bg-green-500 h-3 rounded"
            :style="{ width: ramMorePercent + '%' }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const computers = ref([])

onMounted(() => {
  // ტესტის მონაცემები
  computers.value = [
    { id: 1, ram: 4 },
    { id: 2, ram: 8 },
    { id: 3, ram: 16 },
    { id: 4, ram: 4 },
    { id: 5, ram: 32 },
    { id: 6, ram: 4 },
  ]
})

const total = computed(() => computers.value.length)

const ram4Count = computed(() =>
    computers.value.filter(c => c.ram === 4).length
)

const ramMoreCount = computed(() =>
    computers.value.filter(c => c.ram > 4).length
)

const ram4Percent = computed(() =>
    total.value ? ((ram4Count.value / total.value) * 100).toFixed(1) : 0
)

const ramMorePercent = computed(() =>
    total.value ? ((ramMoreCount.value / total.value) * 100).toFixed(1) : 0
)
</script>
