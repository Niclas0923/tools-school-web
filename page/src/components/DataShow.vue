<script setup>
// 自动收起navbar
import {useCloseNavbar} from "../hooks/useCloseNavbar.js";
useCloseNavbar()
import Input from "./DataShow/Input.vue";
import Table from "./DataShow/Table.vue";

</script>

<template>
  <Transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__zoomInUp"
  >
    <div class="miniFont">
      <Input/>
      <Table/>
    </div>
  </Transition>
</template>

<style scoped>
.miniFont{
  font-size: 14px;
}
</style>