<script setup>
import {useValueStore} from "../store/useValueStore.js";

const val = useValueStore()
</script>

<template>
  <Transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceInUp"
  >
    <div>
      <h1>点名工具</h1>
      <h3>miniIdAndNames</h3>
      <p>{{val.miniIdAndNames}}</p>
    </div>
  </Transition>
</template>

<style scoped>

</style>