<script setup>
import {useValueStore} from "../store/useValueStore.js";
// 自动收起navbar
import {useCloseNavbar} from "../hooks/useCloseNavbar.js";
useCloseNavbar()

const val = useValueStore()
</script>

<template>
  <Transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceInUp"
  >
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
        <tr v-for="i in val.list" :key="i['id']">
          <th scope="row">{{i['id']}}</th>
          <td>{{i["name"]}}</td>
          <td>{{i["tags"]}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </Transition>
</template>

<style scoped>

</style>