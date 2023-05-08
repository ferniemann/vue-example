const app = Vue.createApp({
  // data

  // State
  data() {
    return {
      name: "Nico",
      age: 38,
    };
  },
  methods: {
    birthday() {
      this.age++;
    },
  },

  // methods
  // computed
});
app.mount("#app");
