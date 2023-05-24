<template>
  <h1>Todo</h1>
  <NewTodo @newTodo="addTodo" />
  <!-- Aufrufen des Custom Events "newTodo" -->
  <ul>
    <TodoItem v-for="todo of todos" :key="todo.id" :todo="todo" />
  </ul>
</template>
<script>
import TodoItem from "@/components/TodoItem.vue";
import NewTodo from "@/components/NewTodo.vue";
export default {
  data() {
    return {
      todos: [
        { description: "Hallo Welt", id: 1, done: false },
        { description: "Learn CSS", id: 2, done: true },
      ],
      todoText: "",
    };
  },

  methods: {
    addTodo(data) {
      console.log(data);
      const newTodo = {
        description: data,
        done: false,
        id: Math.floor(Math.random() * 99999),
      };

      this.todos.push(newTodo);
    },
  },

  components: {
    TodoItem,
    NewTodo,
  },
};
</script>
