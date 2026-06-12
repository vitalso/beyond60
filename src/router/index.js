import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import HowItWorks from '../views/HowItWorks.vue'
import AboutUs from '../views/AboutUs.vue'
import Register from '@/views/Register.vue'
import Properties from '@/views/Properties.vue'
import PropertiesList from '@/views/PropertiesList.vue'

// Dasboard pages
import Dashboard from '@/views/admin/DashboardPage.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      { path: '', component: Home },
      { path: '/how-it-works', component: HowItWorks },
      { path: '/about-us', component: AboutUs },
      { path: '/register', component: Register },
      { path: '/properties', component: Properties },
      { path: '/properties/:id', component: PropertiesList }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      { path: '', component: Dashboard }
    ]
  }
]

const router = createRouter({
  linkActiveClass: '!text-black',
  // linkExactActiveClass: 'text-black',
  history: createWebHistory(),
  routes,
})

export default router