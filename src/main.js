/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.use(pinia)

registerPlugins(app)

app.mount('#app')
