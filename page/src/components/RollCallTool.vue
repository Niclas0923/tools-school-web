<script setup>
import {useValueStore} from "../store/useValueStore.js";
// 自动收起navbar
import {useCloseNavbar} from "../hooks/useCloseNavbar.js";
useCloseNavbar()
import On from "./RollCallTool/On.vue";
import Down from "./RollCallTool/down.vue";
import Btn from "./RollCallTool/Btn.vue";

const val = useValueStore()
</script>

<template>
  <Transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__zoomInUp"
  >
    <div>
      <On :miniIdToNames="val.miniIdToNames"/>
      <hr style="color: black;margin: 40px">
      <Down :miniIdToNames="val.miniIdToNames" :miniIds="val.miniIds"/>
    </div>
  </Transition>
  <Btn/>
</template>

<style scoped>

</style>