<script setup>
import {useRollCallListStore} from "../../store/useRollCallListStore.js";

const list = useRollCallListStore()

// 修改now
function changeValue(e){
  list.list.now = e.target.value
}

</script>

<template>
  <select class="form-select mb-4" aria-label="Default select example" v-model="list.list.now" @change="changeValue">
    <option v-for="i in list.list.allOn.tag" :value="i">
      {{i}}
    </option>
  </select>
</template>

<style scoped>

</style>