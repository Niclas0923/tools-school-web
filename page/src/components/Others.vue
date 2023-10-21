<script setup>
// 自动收起navbar
import {useCloseNavbar} from "../hooks/useCloseNavbar.js";
useCloseNavbar()

</script>

<template>
  <Transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__zoomInUp"
  >
    <div>
      <ul class="nav nav-tabs mb-3">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/others/test1">test1</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/others/test2">test2</router-link>
        </li>
      </ul>
      <div class="show">
        <router-view></router-view>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
a{
  color: black;
}
a:hover{
  color: black;
}
.show{
  padding: 20px 40px;
  border-radius: 15px;
  background-color: rgb(225, 225, 225);
}
</style>