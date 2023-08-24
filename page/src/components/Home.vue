<script setup>

</script>

<template>
  <div class="row">
    <div class="col-6 cad">
      <div class="cad-in text-center cardRollCallTool">
        <h4 class="mb-0">点名工具</h4>
      </div>
    </div>
    <div class="col-6 cad">
      <div class="cad-in text-center cardWeChatRelay">
        <h4 class="mb-0">微信接龙</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cad{
  padding: 20px 40px;
}
.cad-in{
  padding: 40px 10px;
  border-radius: 15px;
  cursor: pointer;  /* 设置鼠标样式为手形 */
}
.cad-in:hover{
  opacity: 0.95;
}
.cardRollCallTool{
  background-color: rgb(201,202,201);
  box-shadow: 1px 1px 8px gray;
  //text-shadow: 0 0 10px #dadada;
}
.cardWeChatRelay{
  background-color: rgb(9,206,102);
  box-shadow: 1px 1px 10px rgb(9, 208, 103);
  color: white;
  text-shadow: 0 0 4px gray;
}
</style>