import Vue from 'vue'
import App from './App.vue'

// 导入store 整合vuex
import store from "@/store";

import router from './router'


Vue.config.productionTip = false

new Vue({
  // 注入store
  store,
  router,
  render: h => h(App)
}).$mount('#app')
