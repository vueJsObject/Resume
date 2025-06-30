import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 导入样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/css/main.css'

// 导入Bootstrap的JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)
app.use(router)
app.mount('#app')