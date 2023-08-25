<script setup>
import {computed, reactive} from "vue";

const props = defineProps(["val","inputValue"])
const list = props.val.list
const allValueList = props.val.allValueList

// 具体显示的时候操作的变量
const outV = reactive({
  no:"",
  canNot:"",
  done:""
})

// timeout计时器标识
const iL = [0,0,0]


</script>

<template>
  <div class="col-12 col-lg-6">
    <div id="under">
      <div id="value">
        <h5>未接龙名单</h5>
        <div id="noGet" class="texts">{{!outV.no?"空。":outV.no}}</div>
        <br>
        <h5>未识别内容</h5>
        <div id="cannotRead" class="texts">{{!outV.canNot?"空。":outV.canNot}}</div>
        <br>
        <h5>已接龙名单</h5>
        <div id="get" class="texts">{{!outV.done?"空。":outV.done}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#under{
  width: 100%;
  padding: 20px;
}
#value{
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px gray;
}
.texts{
  background-color: rgb(233,233,233);
  padding: 10px 15px;
  border-radius: 15px;
}
</style>