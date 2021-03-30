<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <img alt="Vue logo" :src="logo" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <div :class="$style.logo">logo</div>
</template>

<script setup>
// 将资源引入为URL，并在模板中使用该变量
import logo from '@/assets/logo.png';
import HelloWorld from './components/HelloWorld.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style module>
.logo {
  width: 200px;
  height: 200px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>