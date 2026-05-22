import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import HowItWorks from '../views/HowItWorks.vue'
// import Contact from '../views/Contact.vue'
// import About from '../views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/how-it-works', component: HowItWorks },
  // { path: '/contact', component: Contact },
  // { path: '/about', component: About },
]

const router = createRouter({
  linkActiveClass: '!text-black',
  // linkExactActiveClass: 'text-black',
  history: createWebHistory(),
  routes,
})

export default router