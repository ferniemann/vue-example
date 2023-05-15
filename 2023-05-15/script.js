Vue.createApp({
  data() {
    return {
      seconds: 0,
      points: 0,

      //intervalId: null,
    };
  },
  methods: {
    startGame() {
      this.seconds = 3;

      const intervalId = setInterval(() => {
        this.seconds--;
        if (this.seconds === 0) {
          clearInterval(intervalId);
        }
      }, 1000);
    },
    whack() {
      if (this.gameIsActive) {
        this.points++;
      }
    },
  },
  computed: {
    gameIsActive() {
      return this.seconds > 0;
    },
  },
  //   watch: {
  //     seconds(newVal, oldVal) {
  //       if (oldVal === 1 && newVal === 0) {
  //         debugger;
  //         clearInterval(this.intervalId);
  //       }
  //     },
  //   },
}).mount("#app");
