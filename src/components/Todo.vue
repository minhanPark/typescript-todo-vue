<template>
  <div class="wrapper">
    <h2 class="title">타이틀</h2>
    <p class="para">내용</p>
    <div class="btn-wrapper">
      <btn class="btn">Delete</btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Todo",
});
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: "#dfe6e9";
  height: 100px;
  padding: 7px 9px;
  border: 1px solid #f3a683;
}
.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  text-decoration: "none";
  color: "black";
}
.para {
  text-decoration: "none";
  color: "black";
}
.btn-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  background-color: #596275;
  border: none;
  color: white;
  padding: 6px 8px;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: #303952;
  }
}
</style>
