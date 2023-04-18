// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function reverseString(str) {
//   let str2 = "";
//   for (let i = 0; i < str.length; i++) {
//     str2 = str[i] + str2;
//   }
//   return str2;
// }

function reverseString(str) {
  const arr = str.split("");
  console.log(arr);

  arr.reverse();
  console.log(arr);

  str = arr.join("");
  console.log(str);

  return str;
}

console.log(reverseString("world"));
