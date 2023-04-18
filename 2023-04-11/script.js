// Variablen
// Daten Typen
// Funktionen

// const arr = [1, 2, 3];

// for (let i = 1; i < 4; i++) {
//   /* aktion der schleife für jeden
//     durchlauf*/
//   console.log("Hallo ", i);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log("Hallo ", arr[i], i);
// }

// function addNumbers(numbers) {
//   // TODO: rechnung
//   let count = 0; // = undefined;

//   for (let i = 0; i < numbers.length; i++) {
//     //const currentNumber = numbers[i];
//     count += numbers[i];
//   }

//   return count;
// }

// const result = addNumbers([4, 6]);
// console.log(result); // 10

// prüfe ob ein array einen bestimmten
// eintrag enthält
function containsValue(arr, value) {
  let contains = false;

  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (arr[i] === value) {
      contains = true;
      break;
    }
  }

  return contains;
}

console.log(containsValue([1, 2, 3, 4, 6, 7], 2));
