// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'
import "@maptiler/sdk/dist/maptiler-sdk.css";


const app = createApp(App)

app.use(router)

app.mount('#app')
