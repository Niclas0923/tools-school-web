<script setup>

import {useRollCallListStore} from "../../store/useRollCallListStore.js";
import {ref} from "vue";

const list = useRollCallListStore()

let show = ref(false)
let val = ref("")

// 用于判断是否含有特殊符号
function containsSpecialCharacter(str) {
  let regex = /[^A-Za-z0-9\u4e00-\u9fa5]/;
  return regex.test(str);
}

function add(){
  if (val.value){
    if (list.list.allOn.tag.indexOf(val.value) === -1){
      if(!containsSpecialCharacter(val.value)){
        list.addOneList(val.value)
        show.value = false
      }else alert("不得含有特殊符号。")
    }else alert("不能重复。")
  }else alert("不得为空。")
}

function close(){
  show.value = false
  val.value = ""
}

</script>

<template>
  <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__zoomInUp"
  >
    <!-- 刷新按钮 -->
    <button type="button" @click="list.refresh()" class="btn btn-success refreshBtn" key="refreshBtn">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
        <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"></path>
      </svg>
      <span style="vertical-align: inherit;"><span style="vertical-align: inherit;"></span></span>
    </button>
    <!-- 上下替换的按钮 -->
    <button type="button" @click="list.changeUpDone()" class="btn btn-secondary changeBtn" key="changeBtn">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
      </svg>
      <span style="vertical-align: inherit;"><span style="vertical-align: inherit;"></span></span>
    </button>
    <!-- 增添的按钮 -->
    <button type="button" @click="show = true;val = ''" class="btn btn-primary addBtn" key="addBtn">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
      </svg>
      <span style="vertical-align: inherit;"><span style="vertical-align: inherit;"></span></span>
    </button>
    <!-- 删除标签的按钮 -->
    <button type="button" @click="list.delNow()" v-if="list.list.allOn.tag.length > 1" class="btn btn-danger delBtn" key="delBtn">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
      <span style="vertical-align: inherit;"><span style="vertical-align: inherit;"></span></span>
    </button>
  </transition-group>

  <Teleport to="body">
    <Transition
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__bounceInUp"
        leave-active-class="animate__bounceOutDown"
    >
      <div class="mask" v-if="show" @click.self="close">
        <div class="in col-10 col-sm-8 col-md-6 col-lg-4 col-xxl-3">
          <h3>名称</h3>
          <div class="mb-3">
            <input type="text" class="form-control" style="border-color: rgba(0,0,0,0.8)" v-model="val">
            <div id="emailHelp" class="form-text">请填写只包含子母和数字组合的短语，不允许使用特殊符号，不允许重复。</div>
          </div>
          <button type="submit" class="btn btn-primary" @click="add">添加</button>
          <div class="close" @click="close">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.btn{
  position: fixed;
}
.refreshBtn{
  left: 15px;
  bottom: 15px;
}
.changeBtn{
  left: 15px;
  bottom: 65px;
}
.addBtn{
  right: 15px;
  bottom: 15px;
}
.delBtn{
  right: 15px;
  bottom: 65px;
}
.mask{
  position: fixed;
  top: 0;bottom: 0;left: 0;right: 0;
  background-color: rgba(0,0,0,0.5);
}
.in{
  background-color: white;
  position: absolute;
  left: 50%;
  top: 45%;
  padding: 50px 50px 70px;
  border-radius: 20px;
  transform: translate(-50%,-50%);
}
.close{
  position: absolute;
  top: 20px;
  right: 25px;
  cursor: pointer;  /* 设置鼠标样式为手形 */
}
</style>