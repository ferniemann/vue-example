Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    betterCount() {
      return this.count * 10;
    },
  },
  watch: {
    count(newVal, oldVal) {
      console.log(`count - oldVal: ${oldVal} - newVal: ${newVal}`);
    },
    // betterCount(newVal, oldVal) {
    //   betterCount.log(`betterCount - oldVal: ${oldVal} - newVal: ${newVal}`);
    // },
  },
}).mount("#app");
