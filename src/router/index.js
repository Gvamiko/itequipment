import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/auth/Dashboard.vue'
import loginView from '../views/LoginView.vue'
import EmployeeList from "@/views/auth/EmployeeList.vue";

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'login',
    component: loginView
  },
  {
    path: '/Employees',
    name: 'Employees',
    component: EmployeeList
  },
  {
    path: '/employees/:id',
    name: 'EmployeeDetails',
    component: () => import('@/views/auth/EmployeeDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
