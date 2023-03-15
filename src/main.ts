import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './main.css'
import './style.css'
import App from './App.vue'
import "flowbite"
import Login from "./components/Login.vue"
import Profile from "./components/Profile.vue"


const routes = [
  { path: '/', component: App },
  { path:'/login' ,component:Login},
  { path: '/profile', component: Profile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')