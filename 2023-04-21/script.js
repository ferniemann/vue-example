// class Foo {
//   constructor() {}

//   hallo() {
//     console.log("hallo");
//   }
// }

// const person = {
//   name: "Nico",
//   job: "Chef",
//   introduce: function () {
//     console.log("Hallo ich bin " + this.name);
//   },
// };

// person.introduce();

// const person2 = {
//   name: "Annelie",
//   job: "Chefin",
// };

// constructor function
// function Person(name, job) {
//   this.name = name;
//   this.job = job;
// }

class Person {
  constructor(name, job) {
    // console.log(name + " wurde übergeben an name");
    // console.log(job + " wurde übergeben an job");
    this.name = name;
    this.job = job;
    // console.log(this);
  }

  /*function*/ introduce() {
    console.log("Hallo, ich bin " + this.name);
  }
}

const annelie = new Person("Annelie", "Chefin");
console.log(annelie.name);
annelie.introduce();

// function createPerson(name, job) {
//   const person = {
//     name: name,
//     job: job,
//   };
//   return person;
// }

// const annelie = createPerson("Annelie", "Chefin");
// const annelie = new Person("Annelie", "Chefin");
// console.log(annelie);
// console.log(annelie.name);
// console.log(annelie.job);
// const katharina = createPerson("Katharina", "Junior Chefin");
// console.log(katharina.name);
// console.log(katharina.job);
