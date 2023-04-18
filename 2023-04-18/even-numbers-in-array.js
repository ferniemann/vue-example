// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

const evenNumbersInArray = function (numbers, count) {
  const numbers2 = [];

  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];
    if (n % 2 === 0) {
      numbers2.push(n);
    }
  }

  return numbers2.slice(-count);
};

// const evenNumbersInArray = function (numbers, count) {
//   numbers = numbers.filter((n) => n % 2 === 0);
//   numbers.reverse();
//   numbers.length = count;
//   numbers.reverse();
//   return numbers;
// };

const r = evenNumbersInArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
console.log(r);
