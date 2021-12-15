<script setup>
import { ref } from 'vue'
import {sayHello} from "../api/hello";

defineProps({
  msg: String
})

const count = ref(0)

const message = ref("Hello Quasar!")

const hi = () => {
  sayHello().then(res=>{
    const { data } = res
    message.value = data
  })
}

</script>

<template>
  <h1>{{ message }}</h1>

  <q-btn color="primary" @click="count++">count is: {{ count }}</q-btn>
  <br><br>
  <q-btn color="info" @click="hi">请求数据</q-btn>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
