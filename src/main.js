/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()

import axios from "@/plugins/axios";
import { createApp } from 'vue'
// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.use(pinia)

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$foo = '111';

registerPlugins(app)

app.mount('#app')
