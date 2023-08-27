<script setup>
import {useRollCallListStore} from "../../store/useRollCallListStore.js";
import {computed} from "vue";

const props = defineProps(["miniIdToNames","miniIds"])

const list = useRollCallListStore()

const done = computed(()=>{
  // console.log(list.list["allOn"]["val"])
  return props.miniIds.filter(i => list.list["allOn"]["val"][list.list.now].indexOf(i) === -1)
})
</script>

<template>
  <div class="row row-cols-3 row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-4">
    <div class="col" v-for="(i,o) in done" :key="i">
      <div class="card h-100 text-center text-bg-light cards" @click="list.downClick(i)">
        <div class="card-header">{{o+1}}</div>
        <div class="card-body">
          <h5 class="card-title">{{props.miniIdToNames[String(Number(i))]}}({{i}})</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards{
  cursor: pointer;  /* 设置鼠标样式为手形 */
  box-shadow: 0 0 5px gray;
}
</style>