<script setup>
import SidebarLayout from '@/components/SidebarLayout.vue'
import DashboardStats from '@/components/DashboardStats.vue'
import ComputerRamStats from '@/components/ComputerRamStats.vue'
</script>

<template>
  <SidebarLayout>
    <div class="p-6 space-y-6">
      <h1 class="text-2xl font-semibold mb-2 text-gray-400">მთავარი</h1>
      <h3 class="gg">gigi</h3>
      <DashboardStats />
      <ComputerRamStats />
    </div>
  </SidebarLayout>
</template>
