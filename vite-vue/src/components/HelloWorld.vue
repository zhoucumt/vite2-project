<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <ul>
    <li v-for="c in courses" :key="c.id">{{c.name}}</li>
  </ul>
</template>

<script setup lang="ts">
  import { defineProps, reactive } from 'vue'

  defineProps({
    msg: String
  })

  const state = reactive({ count: 0 })

  type Course = {
    id: number,
    name: string
  }
  const courses = reactive<Course[]>([{id: 1, name: 'A'}])

</script>

<style scoped>
a {
  color: #42b983;
}
</style>