<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <q-btn color="primary" @click="count++">count is: {{ count }}</q-btn>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
