import { createApp } from 'vue'
import './style.css'
import './assets/less/index.less'
import App from './App.vue'
// 导入路由
import router from './router/index'
// 导入vuex
import store from './store/index'
import api from './api/api'
// 导入icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
app.use(store)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$api = api
app.use(router)
app.mount('#app')