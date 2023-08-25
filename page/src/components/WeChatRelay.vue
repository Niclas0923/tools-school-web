<script setup>
import {useValueStore} from "../store/useValueStore.js";
// 自动收起navbar
import {useCloseNavbar} from "../hooks/useCloseNavbar.js";
useCloseNavbar()

const val = useValueStore()
</script>

<template>
  <Transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceInUp"
  >
    <div>
      <h1>微信接龙处理</h1>
      <h3>list</h3>
      <p>{{val.list}}</p>
      <h3>allValueList</h3>
      <p>{{val.allValueList}}</p>
    </div>
  </Transition>
</template>

<style scoped>

</style>