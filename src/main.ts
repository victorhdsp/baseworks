import 'element-plus/dist/index.css'
import './assets/main.css'
import VueDeviceDetect from '@basitcodeenv/vue3-device-detect'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(VueDeviceDetect)
app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
