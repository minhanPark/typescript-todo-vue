<template>
  <div class="container">
    <h1 class="text-wrapper">Typescript Todos</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 500px;
  width: 100%;
  background-color: #f3a683;
  color: white;
  padding: 8px 10px;
  border: 2px solid #e77f67;
  margin: 30px auto;
}
.text-wrapper {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
</style>
