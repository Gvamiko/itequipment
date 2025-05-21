<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Overlay for mobile -->
    <div
        v-if="isMobileOpen"
        class="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        @click="toggleSidebar"
    />

    <!-- Sidebar -->
    <aside
        :class="[
        'fixed z-50 inset-y-0 left-0 w-64 bg-white shadow-md transform transition-transform duration-200 ease-in-out',
        { '-translate-x-full': !isMobileOpen },
        'md:translate-x-0 md:static md:shadow-none'
      ]"
    >
      <div class="p-6 text-2xl font-bold text-blue-600">RDA IT DEP</div>
      <nav class="mt-4 space-y-1 px-4">
        <RouterLink
            to="/"
            class="block px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            :class="{ 'bg-blue-100 text-blue-700': isActive('/') }"
            @click="closeSidebar"
        >
          მთავარი
        </RouterLink>


        <RouterLink
            to="/employees"
            class="block px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            :class="{ 'bg-blue-100 text-blue-700': isActive('/employees') }"
            @click="closeSidebar"
        >
          თანამშრომლები
        </RouterLink>
        <RouterLink
            to="/library"
            class="block px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
            :class="{ 'bg-blue-100 text-blue-700': isActive('/library') }"
            @click="closeSidebar"
        >
          ბიბლიოთეკა
        </RouterLink>
      </nav>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col">
      <!-- Topbar -->
      <header class="md:hidden bg-white shadow px-4 py-3 flex items-center justify-between">
        <button @click="toggleSidebar" class="text-gray-700 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div class="text-lg font-semibold text-gray-700">FlyApp</div>
        <div></div> <!-- spacer -->
      </header>

      <!-- Page content -->
      <main class="flex-1 overflow-y-auto p-4">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const isMobileOpen = ref(false)

const toggleSidebar = () => {
  isMobileOpen.value = !isMobileOpen.value
}

const closeSidebar = () => {
  isMobileOpen.value = false
}

const isActive = (path) => route.path === path
</script>
