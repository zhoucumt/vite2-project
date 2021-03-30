<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <img alt="Vue logo" :src="logo" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <!-- <div :class="$style.logo">logo</div> -->
  <div :class="classes.logo">logo</div>
  <input type="text" placeholder="请输入姓名">
</template>

<script setup>
// 将资源引入为URL，并在模板中使用该变量
import logo from '@/assets/logo.png';
import HelloWorld from './components/HelloWorld.vue'
import classes from './App.module.less'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style scoped>
::placeholder {
  color: blue;
}
</style>
