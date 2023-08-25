<script setup>
import {computed, onBeforeUnmount, reactive, ref, watch} from "vue";

const props = defineProps(["val","inputValue"])

// 具体显示的时候操作的变量
const outV = reactive({
  no:"",
  canNot:"",
  done:""
})

// timeout计时器标识
const iL = [0,0,0]

// 计算当前输入能筛选出的数据
const nowData = computed(()=>{
  const regex = /^[0-9]+\.(.+?)$/gm;
  const list = []
  let i = 0
  let match = regex.exec(props.inputValue);
  while (match) {
    list[i] = match[1].trim()
    match = regex.exec(props.inputValue);
    i++
  }
  return list
})

// 计算获取到的和没有找到的数据
const getAndNot = computed(()=>{
  const getData = nowData.value
  const allValueList = props.val.allValueList
  const get = []
  const not = []
  // 遍历读取到的
  for (const nowI in getData) {
    for (const allI in allValueList) {
      if (allValueList[allI].indexOf(String(getData[nowI])) !== -1){
        get.push(props.val.list[allI]["name"])
        break
      }
      if (allI === String(allValueList.length-1)){
        not.push({number:Number(nowI)+1, val:getData[nowI]})
      }
    }
  }
  return {get, not}
})

// 监视getAndNot
watch(getAndNot,n=>{
  // 直接清理所有timeout
  for (const i of iL) {
    if (i) clearTimeout(i)
  }
  const get = n.get
  const canNot = n.not
  let not = []

  // 制作没用接龙的
  if (get.length>0){
    not = props.val.names.filter((e)=> get.indexOf(e) === -1)
  }

  // 未能打卡的部分
  if (not.length>0){
    let notVal = ""
    let i1 = 0
    iL[0] = window.setInterval(()=>{
      notVal += `${i1+1}. ${not[i1]}`
      notVal += (i1 === not.length-1)?"。":"，"
      outV.no = notVal
      if (i1 === not.length-1)clearInterval(iL[0])
      i1++
    },150)
  }else outV.no = ""

  // 未能识别的部分
  if (canNot.length>0){
    let canNotVal = ""
    let i2 = 0
    iL[1] = window.setInterval(()=>{
      canNotVal += `${canNot[i2].number}. ${canNot[i2].val}`
      canNotVal += (i2 === canNot.length-1)?"。":"，"
      outV.canNot = canNotVal
      if (i2 === canNot.length-1)clearInterval(iL[1])
      i2++
    },150)
  }else outV.canNot = ""

  // 已经接龙的部分
  if (get.length>0){
    let done = ""
    let i3 = 0
    iL[2] = window.setInterval(()=>{
      done += `${i3+1}. ${get[i3]}`
      done += (i3 === get.length-1)?"。":"，"
      outV.done = done
      if (i3 === get.length-1)clearInterval(iL[2])
      i3++
    },150)
  }else outV.done = ""
})

onBeforeUnmount(()=>{
  // 清理所有timeout
  for (const i of iL) {
    if (i) clearTimeout(i)
  }
})

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