<script setup>
import {computed, onBeforeUnmount, onMounted, reactive} from "vue";

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

// 计算宽度属于区间的函数，返回代码和它的区间范围
let inWidthNow = computed(()=>{
  const w = data.width.in
  if (w<576){
    return ["Nune", "", "< 576px"]
  }else{
    if (w<768){
    return ["sm","576px ≤","< 768px"]
    }else{
      if (w<992){
        return ["md","768px ≤","< 992px"]
      }else{
        if (w<1200){
          return ["lg","992px ≤","< 1200px"]
        }else{
          if (w<1400){
            return ["xl","1200px ≤","< 1400px"]
          }else{
            return ["xxl","1400px ≤",""]
          }
        }
      }
    }
  }
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

  <h4>当前宽度状态：</h4>
  <div class="out">
  <table class="table">
    <thead>
    <tr>
      <th scope="col">代号</th>
      <th scope="col">范围</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>{{inWidthNow[0]}}</td>
      <td>{{inWidthNow[1]+" "+data.width.in+"px "+inWidthNow[2]}}</td>
    </tr>
    </tbody>
  </table>
  </div>

  <h4>bootstrap对应关系表</h4>
  <div class="out">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">代号</th>
        <th scope="col">范围</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><em>None</em></td>
        <td>&lt;576px</td>
      </tr>
      <tr>
        <td><code>sm</code></td>
        <td>≥576px</td>
      </tr>
      <tr>
        <td><code>md</code></td>
        <td>≥768px</td>
      </tr>
      <tr>
        <td><code>lg</code></td>
        <td>≥992px</td>
      </tr>
      <tr>
        <td><code>xl</code></td>
        <td>≥1200px</td>
      </tr>
      <tr>
        <td><code>xxl</code></td>
        <td>≥1400px</td>
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