import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Documentation from '@/views/Documentation'
import Rumah1 from '@/views/Rumah1'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/documentation',
    name: 'documentation',
    component: Documentation
  },
  {
    path: '/rumah1',
    name: 'rumah1',
    component: Rumah1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
