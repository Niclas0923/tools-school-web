<script setup>
import {useValueStore} from "../store/useValueStore.js";
// 自动收起navbar
import {useCloseNavbar} from "../hooks/useCloseNavbar.js";
useCloseNavbar()
import {computed, ref} from "vue";

const val = useValueStore()

// 搜索信息
let searchValue = ref("")

// 显示信息
const showList = computed(()=>{
  if (searchValue.value){
    const list =  val.list.filter(i=>{
      return [i.id,i.name,...i.tags].join(" ").includes(searchValue.value)
    })
    return list.length >0?list:[{name:"无匹配项", id:"无匹配项", tags:"无匹配项"}]
  }else {
    return val.list
  }
})

</script>

<template>
  <Transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__zoomInUp"
  >
    <div>
      <div style="position: relative;">
        <input type="text" class="input mb-3" v-model.trim="searchValue"/>
        <!-- 搜索图标 -->
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-search search-logo" viewBox="0 0 16 16" v-pre>
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        <!-- 删除按钮 -->
        <div @click="searchValue=''" v-show="searchValue.length" class="click clear">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16">
            <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
            <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
          </svg>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-striped table-bordered align-middle">
          <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">姓名</th>
            <th scope="col">其他</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="i in showList" :key="i['id']">
            <th scope="row">{{i['id']}}</th>
            <td>{{i["name"]}}</td>
            <td>{{i["tags"]}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.input{
  width: 100%;
  height: 40px;
  box-shadow: 0 0 5px #bbbbbb;
  padding: 0 35px;
  border-radius: 6px;
  border: none;
  outline: 2px solid white;
  outline-offset: -1px;
}
.input:focus {
  outline:1px solid rgba(0,0,0,.15);
}
.input:hover {
  box-shadow: 0 0 5px gray;
}
.search-logo{
  position: absolute;
  color:gray;
  top: 20px;
  left: 12px;
  transform: translate(0,-50%);
}
.click {
  cursor: pointer;
  position: absolute;
  color: gray;
  top: 18px;
  transform: translate(0, -50%);
}
.clear{
  right: 12px;
}
</style>