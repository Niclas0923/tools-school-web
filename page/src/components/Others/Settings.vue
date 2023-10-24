<script setup>

import {UseSettingsStore} from "../../store/useSettingsStore.js";

const set = UseSettingsStore()

</script>

<template>
  <h3 class="mb-3">导出相关：</h3>
  <h5>导出是否添加序号（默认不添加，不保存）</h5>
  <select class="form-select mb-3" size="2" aria-label="size 2 select example" v-model="set.printOptions.before">
    <option :value="true">添加</option>
    <option :value="false">不添加</option>
  </select>
  <h5>导出间隔设置（默认“，” 不保存）</h5>
  <select class="form-select mb-3" size="3" aria-label="size 3 select example" v-model="set.printOptions.join">
    <option value="，">“，”（中文逗号）</option>
    <option value=" "> “ ”（空格）</option>
    <option value="、">“、”（顿号）</option>
  </select>
</template>

<style scoped>

</style>