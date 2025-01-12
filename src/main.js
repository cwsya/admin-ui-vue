import Vue from 'vue'
import App from './App.vue'

// 导入store 整合vuex
import store from "@/store";

// 导入router 整合vue-router
import router from './router'

// 导入element-ui组件库 并全局注册
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);



Vue.config.productionTip = false

new Vue({
  // 注入store
  store,
  router,
  render: h => h(App)
}).$mount('#app')
