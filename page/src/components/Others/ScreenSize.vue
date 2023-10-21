<script setup>
import {onBeforeUnmount, onMounted, reactive} from "vue";

const data = reactive({
  height:{
    in:0,
    out:0
  },
  width:{
    in:0,
    out:0
  },
  i:0
})

// 更新数据
function update(){
  if (data.height.in !== window.innerHeight) data.height.in = window.innerHeight
  if (data.height.out !== window.outerHeight) data.height.out = window.outerHeight
  if (data.width.in !== window.innerWidth) data.width.in = window.innerWidth
  if (data.width.out !== window.outerWidth) data.width.out = window.outerWidth
}

onMounted(()=>{
  update()
  // 启动计时器
  data.i = window.setInterval(()=>{
    update()
  },100)
})

onBeforeUnmount(()=>{
  // 销毁计时器
  clearInterval(data.i)
})

</script>

<template>
<div>
  <h3>长：</h3>
  <h3>{{data.height.in}}px(in) {{data.height.out}}px(out)</h3>
  <h3>宽：</h3>
  <h3 class="mb-1">{{data.width.in}}px(in) {{data.width.out}}px(out)</h3>
</div>
</template>

<style scoped>

</style>