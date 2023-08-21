<script setup>
import {onMounted} from "vue";
import axios from "axios";
import {useValueStore} from "./store/useValueStore.js";

// 引入list来更新数据
const list = useValueStore()

onMounted(()=>{
  list.updateList()
})
</script>

<template>

</template>

<style scoped>

</style>
