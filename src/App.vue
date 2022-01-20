<template>
  <div class="container">
    <span class="header">타입스크립트 투두</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="scss">
$color: black;
$font-color: white;
.container {
  background-color: $color;
}
.header {
  color: $font-color;
}
</style>
