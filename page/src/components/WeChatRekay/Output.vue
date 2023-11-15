<script setup>
import {computed, onBeforeUnmount, reactive, watch} from "vue";
import {UseSettingsStore} from "../../store/useSettingsStore.js";

const props = defineProps(["val","inputValue"])

const set = UseSettingsStore()

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

function outNoGet(){
  let not = []
  if (getAndNot.value.get.length>0){
    not = props.val.names.filter((e)=> getAndNot.value.get.indexOf(e) === -1)
  }
  if (set.set.printOptions.before) for (let i in not){
    not[i] = `${Number(i)+1}. `+ not[i]
  }
  copy(not.join(set.set.printOptions.join))
}

function outCannotRead(){
  let value = []
  getAndNot.value.not.forEach((e,i)=>{
    let pushValue = e.val
    if (set.set.printOptions.before) pushValue = `${Number(i)+1}. `+pushValue
    value.push(pushValue)
  })
  copy(value.join(set.set.printOptions.join))
}

function outGet(){
  let joinValue = getAndNot.value.get
  if (set.set.printOptions.before) for (let i in joinValue) {
    joinValue[i] = `${Number(i)+1}. `+ joinValue[i]
  }
  copy(joinValue.join(set.set.printOptions.join))
}

function copy(text){
  if (text){
    const input = document.createElement('input');
    input.value = text
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert("复制成功。")
    // window.navigator.clipboard.writeText(text)
    //     .then(() => {
    //       alert("复制成功。")
    //     })
    //     .catch(() => {
    //       alert("没有剪贴板权限，请授权后重试。")
    //     });
  }else alert("导出内容为空。")
}

</script>

<template>
  <div class="col-12 col-sm-6">
    <div id="under">
      <div id="value">
        <h5>未接龙名单</h5>
        <div id="noGet" class="texts">
          {{!outV.no?"空。":outV.no}}
          <div class="out" @click="outNoGet">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
              <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
            </svg>
          </div>
        </div>
        <br>
        <h5>未识别内容</h5>
        <div id="cannotRead" class="texts">
          {{!outV.canNot?"空。":outV.canNot}}
          <div class="out" @click="outCannotRead">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
              <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
            </svg>
          </div>
        </div>
        <br>
        <h5>已接龙名单</h5>
        <div id="get" class="texts">
          {{!outV.done?"空。":outV.done}}
          <div class="out" @click="outGet">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
              <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#under{
  width: 100%;
  padding: 10px;
}
#value {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgb(128, 128, 128);
}
.texts{
  background-color: rgb(233,233,233);
  padding: 10px 15px;
  border-radius: 15px;
  position: relative;
}
.out{
  cursor: pointer;  /* 设置鼠标样式为手形 */
  position: absolute;
  right: 15px;
  bottom: 12px;
}
svg:hover{
  color: #0d6efd;
}
</style>