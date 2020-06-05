import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Documentation from '@/views/Documentation'
import Contact from '@/views/Contact'
import Rumah1 from '@/components/Rumah1'
import Rumah2 from '@/components/Rumah2'
import Rumah3 from '@/components/Rumah3'
import Rumah4 from '@/components/Rumah4'
import Rumah5 from '@/components/Rumah5'
import Rumah6 from '@/components/Rumah6'
import Rumah7 from '@/components/Rumah7'
import Rumah8 from '@/components/Rumah8'
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
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/rumah1',
    name: 'rumah1',
    component: Rumah1
  },
  {
    path: '/rumah2',
    name: 'rumah2',
    component: Rumah2
  },
  {
    path: '/rumah3',
    name: 'rumah3',
    component: Rumah3
  },
  {
    path: '/rumah4',
    name: 'rumah4',
    component: Rumah4
  },
  {
    path: '/rumah5',
    name: 'rumah5',
    component: Rumah5
  },
  {
    path: '/rumah6',
    name: 'rumah6',
    component: Rumah6
  },
  {
    path: '/rumah7',
    name: 'rumah7',
    component: Rumah7
  },
  {
    path: '/rumah8',
    name: 'rumah8',
    component: Rumah8
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
