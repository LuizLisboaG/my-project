import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Users from '../views/Users.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Dashboard
  },
  {
    path: '/user',
    name: 'Users',
    component: Users
  }
]

const router = new VueRouter({
  routes
})

export default router
