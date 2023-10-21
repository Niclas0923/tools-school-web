<script setup>
import {onBeforeUnmount, onMounted, reactive} from "vue";
import Output from "../WeChatRekay/Output.vue";

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
  <h4>长：</h4>
  <div class="out">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">in</th>
        <th scope="col">out</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{data.height.in}}px</td>
        <td>{{data.height.out}}px</td>
      </tr>
      </tbody>
    </table>
  </div>
  <h4>宽：</h4>
  <div class="out">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">in</th>
        <th scope="col">out</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{data.width.in}}px</td>
        <td>{{data.width.out}}px</td>
      </tr>
      </tbody>
    </table>
  </div>

</div>
</template>

<style scoped>
.out{
  box-shadow: 0 0 1px black;
  border-radius: 7px;
  padding: 0 10px;
}
</style>