<template>
  <form>
    <input type="text" name="" id="" v-model="todoText" />
    <button @click.prevent="addTodo">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todoText: "",
    };
  },

  methods: {
    addTodo() {
      this.$emit("newTodo", this.todoText); // Name des Custom Events: newTodo
    },
  },
};
</script>
