<template>
  <div id="app">
    <h1>Hello World!</h1>
    <h2>用户名: {{userName}}</h2>
    <h2>token: {{tokenVal}}</h2>
    用户名: <input type="text" v-model="userNameInp" />
    token: <input type="text" v-model="tokenValInp"/>
    <button @click="upUserData">修改</button>
  </div>
</template>

<script>

import {mapActions, mapState} from "vuex";

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
  mounted() {},
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
