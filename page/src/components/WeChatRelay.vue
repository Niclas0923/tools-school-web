<script setup>
import {useValueStore} from "../store/useValueStore.js";
import Input from "./WeChatRekay/Input.vue";
import Output from "./WeChatRekay/Output.vue";
// 自动收起navbar
import {useCloseNavbar} from "../hooks/useCloseNavbar.js";
import {ref} from "vue";
useCloseNavbar()

const val = useValueStore()

// 这个是输入的信息，需要传给显示进行处理
let inputValue = ref("")

// 修改输入信息，需要传给输入部分
function changeInputValue(value){
  inputValue.value = value
}

</script>

<template>
  <Transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__zoomInUp"
  >
    <div>
      <div class="row">
        <Input :changeInputValue="changeInputValue"/>
        <Output :val="val" :input-value="inputValue"/>
      </div>
    </div>
  </Transition>
</template>

<style scoped>

</style>