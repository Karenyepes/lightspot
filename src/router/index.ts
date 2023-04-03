import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import store from "@/store"
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = store.getters["auth/isAuthenticated"]

      if (isAuthenticated) return next("/")
      next()
  }
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
