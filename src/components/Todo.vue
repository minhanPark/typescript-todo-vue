<template>
  <div
    class="wrapper"
    :class="{ isCompleted: this.isCompleted }"
    @click="toggleTodo"
  >
    <h2 class="title" :class="{ isCompleted: this.isCompleted }">
      {{ title }}
    </h2>
    <p class="para" :class="{ isCompleted: this.isCompleted }">{{ desc }}</p>
    <div class="btn-wrapper">
      <button class="btn" @click="deleteTodo">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Todo",
  props: {
    id: Number,
    title: String,
    desc: String,
    isCompleted: Boolean,
  },
  methods: {
    deleteTodo() {
      this.$emit("deleteTodoEvent", this.id);
    },
    toggleTodo() {
      this.$emit("toggleTodoEvent", this.id);
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #dfe6e9;
  height: 100px;
  padding: 7px 9px;
  border: 1px solid #f3a683;
  &.isCompleted {
    background-color: #f19066;
  }
}
.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  text-decoration: "none";
  color: black;
  &.isCompleted {
    text-decoration: line-through;
    color: white;
  }
}
.para {
  text-decoration: "none";
  color: black;
  &.isCompleted {
    text-decoration: line-through;
    color: white;
  }
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
