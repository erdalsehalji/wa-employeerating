import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { Auth } from '@/services/index.js'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },


  {
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminDashboard.vue')
  },

  {
    path: '/Feedback',
    name: 'Feedback',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Feedback.vue')
  },

  
  
  {
    path: '/EmployeeCard',
    name: 'EmployeeCard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EmployeeCard.vue')
  },
  
  {
    path: '/AdminDashboard/:id',
    props: true,
    name: 'post-detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/EmployeeCardDetailed.vue')
  },
  
  {
    path: '/Login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  
  {
    path: '/Register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },


 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next) => {
  const publicPages = ["/Login", "/Register", "/"]
  const loginNeeded = !publicPages.includes(to.path)
  const user = Auth.getUser()

  if (loginNeeded && !user) {
    next('/Login')
    return
  }
  
  next()
 
}) 

export default router
