<script setup>
import tinyPinyin from 'tiny-pinyin'
import {useValueStore} from "../../store/useValueStore.js";
const val = useValueStore()
import {useSearchValueStore} from "../../store/useSearchValueStore.js";
const val2 = useSearchValueStore()

// 显示信息
import {computed} from "vue";

const showList = computed(()=>{
  if (val2.searchValue){
    const list =  val.list.filter(i=>{
      let all = ""
      let Initial = ""
      tinyPinyin.parse(i.name).forEach(i=>{
        all += i.target
        Initial += i.target[0]
      })
      return [i.id,i.name,...i.tags,all.toLowerCase(),Initial.toLowerCase()].join(" ").includes(val2.searchValue)
    })
    return list.length >0?list:[{name:"无匹配项", id:"无匹配项", tags:"无匹配项"}]
  }else {
    return val.list
  }
})
</script>

<template>
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
</template>

<style scoped>

</style>