const app = Vue.createApp({
  // State
  data() {
    return {
      lottoNumbers: [],
    };
  },
  methods: {
    pickNumber() {
      const n = this.randomIntFromInterval(1, 49);
      if (this.lottoNumbers.includes(n)) {
        this.pickNumber();
        return;
      }
      this.lottoNumbers.push(n);
    },
    randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    reset() {
      this.lottoNumbers = [];
    },
  },
  computed: {
    pickButtonDisabled() {
      return this.lottoNumbers.length === 6;
    },
    resetButtonDisabled() {
      return this.lottoNumbers.length !== 6;
    },
  },
});
app.mount("#app");
