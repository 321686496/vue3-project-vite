import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

// 使用pinia状态管理
app.use(createPinia())
//使用路由
app.use(router)
//element ui框架
app.use(ElementPlus)
//挂在app
app.mount('#app')
