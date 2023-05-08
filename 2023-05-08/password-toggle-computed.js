const app = Vue.createApp({
  // State
  data() {
    return {
      // inputType: "password",
      // buttonText: "Show Password",
      passwordHidden: true,
      // passwordHidden true: ButtonText = Show Password
      // passwordHidden true: inputType = password
      // passwordHidden false: ButtonText = Hide Password
      // passwordHidden false: inputType = text
    };
  },
  methods: {
    toggle() {
      this.passwordHidden = !this.passwordHidden;
      // console.log("asdfasfd");
      // // type des inputs ändern
      // // button text ändern
      // if (this.inputType === "password") {
      //   this.inputType = "text";
      //   this.buttonText = "Hide Password";
      // } else {
      //   this.inputType = "password";
      //   this.buttonText = "Show Password";
      // }
    },
  },
  computed: {
    passwortStatus() {
      if (this.passwordHidden === true) {
        return "Passwort ist versteckt";
      } else {
        return "Passwort ist sichtbar";
      }
    },
    buttonText() {
      if (this.passwordHidden === true) {
        return "Show Password";
      } else {
        return "Hide Password";
      }
    },
    inputType() {
      if (this.passwordHidden === true) {
        return "password";
      } else {
        return "text";
      }
    },
  },
});
app.mount("#app");
