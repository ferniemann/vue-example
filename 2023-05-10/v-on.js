Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click(event) {
      console.log("xxx", event);
    },
  },
}).mount("#app");
