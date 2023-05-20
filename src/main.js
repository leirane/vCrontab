// import Vue from 'vue'
import {createApp,ref} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import { configureCompat } from 'vue'


const app = createApp(App)
app.use(ElementPlus)
// import App from './App.vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css'

// configureCompat({
//     MODE: 3,
//     FEATURE_ID_A: true,
//     FEATURE_ID_B: true
// })
// Vue.use(ElementUI);
// app.config.productionTip = false
app.mount('#app')
// new Vue({
//     render: h => h(App)
// }).$mount('#app')
