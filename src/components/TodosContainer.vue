<template>
  <div class="container">
    <Todo
      v-for="todo in todos"
      :key="todo.id"
      :isCompleted="todo.isCompleted"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Todo from "./Todo.vue";

interface ITodo {
  id: number;
  title: string;
  desc: string;
  isCompleted: boolean;
}

export default defineComponent({
  name: "TodosContainer.vue",
  components: {
    Todo,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Make todo",
          desc: "make todo with me",
          isCompleted: false,
        },
        {
          id: 2,
          title: "sleep early",
          desc: "please Sleep early asap",
          isCompleted: false,
        },
        {
          id: 3,
          title: "game",
          desc: "Play game with friend",
          isCompleted: true,
        },
      ] as ITodo[],
    };
  },
  methods: {
    setTodos(newTodos: ITodo[]): void {
      this.todos = newTodos;
    },
    // 삭제기능
    deleteTodo(id: number): void {
      const newArr = this.todos.filter((todo) => todo.id !== id);
      this.setTodos(newArr);
    },
    // Complete수정기능
    // 추가 기능
    addTodo({ title, desc }: { title: string; desc: string }): void {
      const id = this.todos[this.todos.length - 1]["id"] + 1;
      this.setTodos([
        ...this.todos,
        {
          id,
          title,
          desc,
          isCompleted: false,
        },
      ]);
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 450px;
  width: 100%;
  border: 2px solid #f3a683;
  margin: 0 auto;
  min-height: 500px;
}
</style>
