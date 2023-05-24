<template>
  <li>
    <input
      type="checkbox"
      name="done-state"
      :id="todo.id"
      :checked="todo.done"
    />
    <label :for="todo.id">{{ todo.description }}</label>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
};
</script>
