import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import './mock/index.js'

Vue.prototype.$http = axios;

Vue.config.productionTip = false

// 注册$bus 事件总线
Vue.prototype.$bus = new Vue()

new Vue({
    render: h => h(App),
    router
}).$mount('#app')