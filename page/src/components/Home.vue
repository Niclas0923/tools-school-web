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
      enter-active-class="animate__zoomInUp"
  >
    <div class="page">
      <div class="row-home">
        <div class="row">
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
      </div>
    </div>
  </Transition>
</template>

<style lang="less" scoped>
.page{
  height: 75vh;
  position: relative;

}
.row-home{
  padding: 0 20px;
  position: absolute;
  transform: translate(-50%,-50%);
  top:50%;
  left: 50%;
  width: 90%;
}
.cad{
  padding: 20px 30px;

  .cad-in{
    padding: 35px 15px;
    border-radius: 15px;
    cursor: pointer;  /* 设置鼠标样式为手形 */
  }
  .cad-in:hover{
    transform: translate(0,-1%);
  }

  /*点名卡片的样式*/
  .cardRollCallTool{
    background-color: rgb(233,233,233);
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
    text-shadow: 1px 1px 2px black;
  }
  .cardWeChatRelay:hover{
    box-shadow: 1px 1px 14px rgb(8, 208, 102);
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