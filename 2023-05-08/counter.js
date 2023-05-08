const app = Vue.createApp({
  // State
  data() {
    return {
      count: 0,
      // buttonDisabled: true,
    };
  },
  methods: {
    increment() {
      this.count++;
      // this.buttonDisabled = false;
    },
    reset() {
      this.count = 0;
      // this.buttonDisabled = true;
    },
  },
  computed: {
    buttonDisabled() {
      if (this.count === 0) {
        return true;
      } else {
        return false;
      }
    },
  },
});
app.mount("#app");
