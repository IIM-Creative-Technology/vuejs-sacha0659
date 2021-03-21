import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AdminPanel from '../components/AdminPanel.vue'
import BlogList from '../components/BlogList.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    component: AdminPanel
  },
  {
    path: '/blog',
    component:BlogList
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
