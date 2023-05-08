const app = Vue.createApp({
  // State
  data() {
    return {
      inputType: "password",
      buttonText: "Show Password",
    };
  },
  methods: {
    toggle() {
      console.log("asdfasfd");
      // type des inputs ändern
      // button text ändern
      if (this.inputType === "password") {
        this.inputType = "text";
        this.buttonText = "Hide Password";
      } else {
        this.inputType = "password";
        this.buttonText = "Show Password";
      }
    },
  },
});
app.mount("#app");
