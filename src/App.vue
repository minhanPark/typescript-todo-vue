<template>
  <Header />
  <TodosContainer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import TodosContainer from "./components/TodosContainer.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    TodosContainer,
  },
});
</script>

<style lang="scss"></style>
