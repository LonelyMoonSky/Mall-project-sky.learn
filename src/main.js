import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

// 导入模拟数据库mock
import './mock/index.js'

// 导入fastclick 
import FastClick from 'fastclick'

// 导入lazyload
import VueLazyLoad from 'vue-lazyload'

// 自己创建一个toast插件
import toast from 'components/common/toast'

Vue.prototype.$http = axios;

Vue.config.productionTip = false

// 注册$bus 事件总线
Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast)

// 解决移动端延迟300ms的问题
FastClick.attach(document.body)

// 使用图片懒加载的插件
Vue.use(VueLazyLoad, {
    loading: require('./assets/img/common/hold.gif')
})

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')