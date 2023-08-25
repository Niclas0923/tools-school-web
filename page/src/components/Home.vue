<script setup>
import {useRouter} from "vue-router";
// 自动收起navbar
import {useCloseNavbar} from "../hooks/useCloseNavbar.js";
useCloseNavbar()

// 引入路由器
const router = useRouter()

</script>

<template>
  <Transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__bounceInUp"
  >
    <div class="row row-home">
      <div class="cad col-6 col-md-4">
        <div class="cad-in text-center cardRollCallTool" @click="router.push('/rollCallTool')">
          <h4 class="mb-0">点名工具</h4>
        </div>
      </div>
      <div class="cad col-6 col-md-4">
        <div class="cad-in text-center cardWeChatRelay" @click="router.push('/weChatRelay')">
          <h4 class="mb-0">微信接龙</h4>
        </div>
      </div>
      <div class="cad col-6 col-md-4">
        <div class="cad-in text-center cardDataShow" @click="router.push('/dataShow')">
          <h4 class="mb-0">所有数据</h4>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="less" scoped>
.cad{
  padding: 20px 40px;

  .cad-in{
    padding: 40px 10px;
    border-radius: 15px;
    cursor: pointer;  /* 设置鼠标样式为手形 */
  }
  .cad-in:hover{
    transform: translate(0,-1%);
  }

  /*点名卡片的样式*/
  .cardRollCallTool{
    background-color: rgb(201,202,201);
    box-shadow: 1px 1px 8px gray;
  }
  .cardRollCallTool:hover{
    box-shadow: 1px 1px 12px gray;
  }
  /*微信接龙卡片的样式*/
  .cardWeChatRelay{
    background-color: rgb(9,206,102);
    box-shadow: 1px 1px 10px rgb(9, 208, 103);
    color: white;
    text-shadow: 0 0 4px gray;
  }
  .cardWeChatRelay:hover{
    box-shadow: 1px 1px 16px rgb(9, 208, 103);
  }
  /*所有数据卡片的样式*/
  .cardDataShow{
    box-shadow: 1px 1px 8px gray;
  }
  .cardDataShow:hover{
    box-shadow: 1px 1px 12px gray;
  }
}
</style>