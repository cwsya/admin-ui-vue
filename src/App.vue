<template>
  <div id="app">
    <h1>Hello World!</h1>
    <h2>用户名: {{userName}}</h2>
    <h2>token: {{tokenVal}}</h2>
    用户名: <input type="text" v-model="userNameInp" />
    token: <input type="text" v-model="tokenValInp"/>
    <el-button
        type="primary"
        @click="upUserData"
    >修改</el-button>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

import {mapActions, mapState} from "vuex";
import {getData} from "@/api/TestApi";

export default {
  // 定义组件的名称
  name: 'App',
  // 定义组件
  components: {},
  // 定义数据
  data() {
    return {
      userNameInp: "",
      tokenValInp: "",
    }
  },
  // 定义计算属性
  computed: {
    ...mapState("user",["userName","tokenVal"])
  },
  // 定义方法
  methods: {
    upUserData(){
      this.setUserName(this.userNameInp)
      this.setTokenVal(this.tokenValInp)
    },
    ...mapActions("user",["setUserName","setTokenVal"])
  },
  // 定义观察器
  watch: {},
  // 组件挂载完成时执行
  mounted() {
    getData({
      userName:"test",
      password:"123456"
    })
    .then(res=>{
      console.log('请求成功',res)
    })
  },
  // 组件创建完成时执行
  created() {}
}
</script>

<style lang="less">
  #app{
    background-color: antiquewhite;
    h1{
      color: blue;
    }
  }
</style>
