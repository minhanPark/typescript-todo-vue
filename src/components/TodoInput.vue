<template>
  <div class="wrapper">
    <form class="form" @submit.prevent="handleSubmit">
      <input class="input" placeholder="제목" v-model="title" />
      <textarea class="textarea" placeholder="오늘 할 일" v-model="desc" />
      <button class="button" @submit.prevent="handleSubmit">입력</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TodoInput",
  data() {
    return {
      title: "",
      desc: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("addTodoEvent", {
        title: this.title,
        desc: this.desc,
      });
      this.title = "";
      this.desc = "";
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  border: 2px solid #f3a683;
  max-width: 450px;
  width: 100%;
  margin: 20px auto;
}
.form {
  display: flex;
  flex-direction: column;
}
.input {
  padding: 8px 13px;
}
.textarea {
  padding: 8px 13px;
}
.button {
  border: none;
  background-color: #f3a683;
  color: #ced6e0;
  padding: 8px 13px;
  &:hover {
    background-color: #e15f41;
    color: #2f3542;
  }
}
</style>
