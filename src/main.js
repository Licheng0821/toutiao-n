import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入全局的样式文件
import './styles/index.less'
// 加载Vant 核心组件库
import Vant from 'vant'
// 加载全局样式
import 'vant/lib/index.css'
// 注册使用vant组件库
import 'amfe-flexible'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
