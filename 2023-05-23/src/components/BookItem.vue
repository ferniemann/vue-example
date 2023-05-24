<template>
  <div>
    <h2>{{ bookTitle }}</h2>
    <p>{{ isbn }}</p>
  </div>
</template>
<script>
export default {
  props: {
    bookTitle: String,
    isbn: String,
  },
};
</script>
