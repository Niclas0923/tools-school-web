<script setup>
import {useRollCallListStore} from "../../store/useRollCallListStore.js";

const props = defineProps(["miniIdToNames"])

const list = useRollCallListStore()
</script>

<template>
  <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">
    <div class="col" v-for="(i,o) in list.list['allOn']['home']" :key="i">
      <div class="card h-100 text-center text-bg-primary cards" @click="list.onClick(i)">
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
  box-shadow: 0 0 5px blue;
}
</style>