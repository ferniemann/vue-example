function sayHello() {
  console.log("Hallo");
}

// 1. Element ermitteln
// Eindeutige Ermittlung von Elementen am besten über IDs
// selector = Referenz für Element
const button = document.querySelector("#toggle-button");

// Names Function verwenden, wenn Funktion in Zukunft neben dem
// EventListener noch gebraucht wird
// button.addEventListener("click", sayHello);

// Anonyme Funktion, wenn es keine Wiederverwendung gibt
button.addEventListener("click", function () {
  const body = document.querySelector("body");
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
  }
  //   if (body.style.backgroundColor === "black") {
  //     body.style.backgroundColor = "white";
  //   } else {
  //     body.style.backgroundColor = "black";
  //   }
});

// NICHT MACHEN - LEGACY CODE!
// button.onclick = sayHello;
// button.onclick = function () {
//   console.log("Hallo aus anonymer Funktion");
// };

// Alle Elemente die auf dieses Typ matchen
// const buttons = document.querySelectorAll("buttonx");

// const footer = document.querySelector("footer");
// console.log(footer);
// const buttonInFooter = footer.querySelector("button");
// console.log(buttonInFooter);
