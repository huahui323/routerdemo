<script setup>
import router from './router/index.js'
import {ref} from 'vue'
const toHome=()=>{
  router.push('/home');

}
const toAbout=()=>{
  router.push('/about');

}
const toNews=()=>{
  router.push('/news/'+nid.value);
}
const toEvent=()=>{
  router.push({path:'/event',query:{title:'阿富汗新闻',content:'塔利班重新掌握政权'}});
}
let nid=ref('123');
</script>

<template>
  <div>
    <div class="nav">
      
     <router-link to="/home" >首页</router-link>&nbsp;&nbsp;
     <router-link to="/about" activeClass="current">关于我们</router-link>&nbsp;&nbsp;
     <!-- <router-link :to="'/news/'+nid">新闻</router-link> -->
     <!-- <router-link :to="{path:'/event',query:{title:'阿富汗新闻',content:'塔利班重新掌握政权'}}">今日要闻</router-link>&nbsp;&nbsp; -->
      
      <button @click="toNews()">新闻页面</button>||
      <button @click="toEvent()">今日要闻</button>

      <!-- <button @click="toHome()">首页</button>||
      <button @click="toAbout()">关于</button> -->
    </div>
    <div class="maincontent">
      <!--展示符合路由规则结束页面-->
      <router-view></router-view>
    </div>
    <div class="footer">这是底部版权信息</div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  background-color: violet;
}
.maincontent {
  background-color: yellow;
}
.current,
.router-link-active {
  font-size: 18px;

  color: red;

  font-weight: bolder;
}
</style>
