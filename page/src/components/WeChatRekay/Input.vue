<script setup>
import {ref, watch} from "vue";

let val = ref("")

const value = defineProps(["changeInputValue"])

let timeOutI = 0
watch(val,n=>{
  if (timeOutI) clearTimeout(timeOutI)
  timeOutI = window.setTimeout(()=>{
    value.changeInputValue(n)
  },300)
})
</script>

<template>
  <div class="col-12 col-sm-6">
    <div id="inputs" class="form-floating">
      <textarea class="form-control textarea" placeholder="请粘贴接龙" id="floatingTextarea2" v-model="val"></textarea>
      <label for="floatingTextarea2">请粘贴接龙</label>
      <a @click="val = ''">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped>
#inputs{
  position: relative;
  overflow: hidden;
  height: 336px;
  padding: 10px;
}
#inputs>textarea{
  resize: none;
  border: black;
  height: 100%;
  border-radius: 10px;
  padding: 25px 20px;
  box-shadow: 0 0 5px rgb(128, 128, 128);
}
#inputs>label{
  position: absolute;left: 25px;top: 20px;
}
#inputs>a{
  position: absolute;
  top: 35px;
  right: 35px;
  cursor: pointer;  /* 设置鼠标样式为手形 */
}
</style>