import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import HowItWorks from '../views/HowItWorks.vue'
// import Contact from '../views/Contact.vue'
import AboutUs from '../views/AboutUs.vue'
import Register from '@/views/Register.vue'
import Properties from '@/views/Properties.vue'
import PropertiesList from '@/views/PropertiesList.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/how-it-works', component: HowItWorks },
  // { path: '/contact', component: Contact },
  { path: '/about-us', component: AboutUs },
  { path: '/register', component: Register },
  { path: '/properties', component: Properties },
  { path: '/properties/:id', component: PropertiesList }
]

const router = createRouter({
  linkActiveClass: '!text-black',
  // linkExactActiveClass: 'text-black',
  history: createWebHistory(),
  routes,
})

export default router