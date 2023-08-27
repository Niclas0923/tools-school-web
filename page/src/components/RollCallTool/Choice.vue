<script setup>
import {useRollCallListStore} from "../../store/useRollCallListStore.js";
import {ref} from "vue";

const list = useRollCallListStore()

// 用于储存当前点击位置
let c = ref(list.list.now)

</script>

<template>
  <select class="form-select mb-4" aria-label="Default select example" v-model="c" @change="list.changeNow(c)">
    <option v-for="i in list.list.allOn.tag" :value="i">
      {{i}}
    </option>
  </select>
</template>

<style scoped>

</style>