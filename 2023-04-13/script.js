// const obj1 = {
//   name: "Nico",
//   age: 25,
// };

// const obj2 = structuredClone(obj1);
// // const obj2 = obj1;

// console.log(obj1 === obj2);

const arr = [1, 2, 3, { name: "Nico" }];
// const arr2 = [...arr];
const arr2 = structuredClone(arr);

console.log(arr[3] === arr2[3]);
