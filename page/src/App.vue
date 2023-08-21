<script setup>
import {onMounted} from "vue";
import axios from "axios";
import {useValueStore} from "./store/useValueStore.js";

// 引入list数据用于导入
const list = useValueStore()

onMounted(()=>{
  axios.get("/data").then(
      data=>{
        if (data.data) list.list = data.data
      },
      err=>{
        console.log(err)
        alert("网络访问失败")
      }
  )
})
</script>

<template>

</template>

<style scoped>

</style>
