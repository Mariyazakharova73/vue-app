import './assets/main.css'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { FAVORITES, MAIN, PROFILE } from './utils/variables'

import FavoritesPage from './pages/FavoritesPage.vue'
import HomePage from './pages/HomePage.vue'
import ProfilePage from './pages/ProfilePage.vue'

const routes = [
  { path: MAIN, component: HomePage, name: 'Home' },
  { path: FAVORITES, component: FavoritesPage, name: 'Favorites' },
  { path: PROFILE, component: ProfilePage, name: 'Profile' },
]

const router = createRouter({ history: createWebHistory(), routes })

const app = createApp(App)
app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
