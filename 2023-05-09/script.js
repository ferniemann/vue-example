Vue.createApp({
  data() {
    return {
      chars: [],
      charsPressed: [],
    };
  },
  created() {
    this.splitLetters();
  },
  methods: {
    splitLetters() {
      this.chars = "abcdefghijklmnopqrstuvwxyz".split("");
    },
    buttonPress(char) {
      this.charsPressed.push(char);
    },
    isKeyDisabled(char) {
      return this.charsPressed.includes(char);
    },
  },
  computed: {},
}).mount("#app");
