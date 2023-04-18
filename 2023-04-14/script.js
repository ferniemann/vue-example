// const stundenplan = `
// Stunde,Montag,Dienstag,Mittwoch,Donnerstag,Freitag
// 1,Mathematik,Deutsch,Englisch,Erdkunde,Politik
// 2,Sport,Deutsch,Englisch,Sport,Geschichte
// 3,Sport,"Religion (ev., kath.)",Kunst,,Kunst
// `;

// console.log(stundenplan);

// const zeilen = stundenplan.split("\n");

// console.log(zeilen);

// const str = "Daniel Kull";
// const arr = str.split("");
// arr.reverse();
// const str2 = arr.join(".");
// console.log(str2);

// // CSV = comma separated values

// named function
function sayHello() {
  console.log("hello");
  // throw new Error("no no");
}
//sayHello();

// anonyme function
const sayHelloAnonym = function () {
  console.log("hello");
  // throw new Error("no no");
};
// sayHelloAnonym();

// arrow function
// this keyword
// const sayHelloArrow = () => {
//   console.log("hello aus arrow function");
// };
// const sayHelloArrow = () => console.log("hello aus arrow function");
// sayHelloArrow();

// const sayHelloToPerson = (person) => {
//   console.log("Hallo " + person);
// };

// sayHelloToPerson("Katja");

// implizietes Return
// const addNumbers = (a, b) => {
//   return a + b;
// };
// const addNumbers = (a, b) => /* return */ a + b;

// console.log(addNumbers(1, 2));

// callback function
// callback function ist eine funktion
// die als parameter an eine andere funktion
// übergeben wird um dann aufgerufen zu werden
// function sayHello() {
//   console.log("Hallo");
// }

// function invokeFunction(fn) {
//   fn();
// }

// invokeFunction(sayHello);

// Rekursion - igitt!
// function foo() {
//   console.log("foo");
//   foo();
// }
// foo();

const arr = ["Nico", "Kirsten", "Nina", "Lucy", "Nicole"];

// for (let i = 0; i < arr.length; i++) {
//   const person = arr[i];
//   console.log("Hallo " + person);
// }

// forEach callback mit anonymer function
// arr.forEach(function (item) {
//   console.log("Hallo " + item);
// });

// forEach callback mit arrow function
// arr.forEach((item) => console.log("Hallo " + item));

// const namesWithN = arr.filter((name) => name.startsWith("K"));
// console.log(namesWithN);

function filterByFirstLetter(arr, firstLetter) {
  const namesWithLetter = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item.startsWith(firstLetter)) {
      namesWithLetter.push(item);
    }
  }
  return namesWithLetter;
}

console.log(filterByFirstLetter(arr, "N"));
