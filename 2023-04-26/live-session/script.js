const button = document.querySelector("#button");

// const button = document.getElementById("button")

// let passwordHidden = false;

button.addEventListener("click", function () {
  const agb = document.querySelector("#agb");
  console.log(agb.checked);
  console.log(agb.getAttribute("checked"));

  // Type Attribut des Inputs ändern in "text"

  const input = document.querySelector("#pw-input");
  //if (button.innerText === "Show Password") {
  //if (input.type === "password") {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    button.innerText = "Hide Password";
  } else {
    input.setAttribute("type", "password");
    button.innerText = "Show Password";
  }

  //   passwordHidden = !passwordHidden;
});
