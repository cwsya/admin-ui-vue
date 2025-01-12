import Vue from 'vue'
import App from './App.vue'

// 导入store 整合vuex
import store from "@/store";


Vue.config.productionTip = false

new Vue({
  // 注入store
  store,
  render: h => h(App),
}).$mount('#app')
