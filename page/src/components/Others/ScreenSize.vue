<script setup>
import {onMounted, reactive} from "vue";

const data = reactive({
  height:{
    in:0,
    out:0
  },
  width:{
    in:0,
    out:0
  }
})

onMounted(()=>{
  data.height.in = window.innerHeight
  data.height.out = window.outerHeight
  data.width.in = window.innerWidth
  data.width.out = window.outerWidth
})

</script>

<template>
<div>
  <h3>长：</h3>
  <h3>{{data.height.in}}px(in) {{data.height.out}}px(out)</h3>
  <h3>宽：</h3>
  <h3 class="mb-0">{{data.width.in}}px(in) {{data.width.out}}px(out)</h3>
</div>
</template>

<style scoped>

</style>