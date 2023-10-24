<script setup>
import {useRollCallListStore} from "../../store/useRollCallListStore.js";
import {UseSettingsStore} from "../../store/useSettingsStore.js";

const props = defineProps(["miniIdToNames"])

const list = useRollCallListStore()
const set = UseSettingsStore()

function copy(text){
  if (text){
    navigator.clipboard.writeText(text)
        .then(() => {
          alert("已经导出到剪贴板。")
        })
        .catch(() => {
          alert("没有剪贴板权限，请授权后重试。")
        });
  }else alert("导出内容为空。")
}

function out(){
  const data = list.list['allOn']['val'][list.list.now]
  let logList = []
  for (const i in data) {
    let pushValue = props.miniIdToNames[String(Number(data[i]))]
    if (set.printOptions.before) pushValue = `${Number(i)+1}. `+ pushValue
    logList.push(pushValue)
  }
  copy(logList.join(set.printOptions.join))
}
</script>

<template>
  <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
    <div class="col" v-for="(i,o) in list.list['allOn']['val'][list.list.now]" :key="i">
      <div class="card h-100 text-center text-bg-primary cards" @click="list.onClick(i)">
        <div class="card-header">{{o+1}}</div>
        <div class="card-body">
          <h5 class="card-title">{{props.miniIdToNames[String(Number(i))]}}({{i}})</h5>
        </div>
      </div>
    </div>
  </div>
  <div class="out-div" @click="out">
    <div class="out">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"></path>
        <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"></path>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.cards{
  cursor: pointer;  /* 设置鼠标样式为手形 */
  box-shadow: 0 0 5px rgb(11,110,253);
}
.out-div{
  height: 40px;
  position: relative;
}
.out{
  cursor: pointer;  /* 设置鼠标样式为手形 */
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%,0);
  color: rgb(128, 128, 128);
}
.out:hover{
  color: black;
}
</style>