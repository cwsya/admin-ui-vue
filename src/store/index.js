//这里面存放的就是vuex的核心代码
import Vue from 'vue'
import Vuex from 'vuex'

// 导入模块
import user from './modules/user'

//插件安装
Vue.use(Vuex)

//创建仓库
export default new Vuex.Store({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        user
    }
})