// function repeat(n, str) {
//   let strRepeated = "";
//   for (let i = 0; i < n; i++) {
//     strRepeated += str;
//   }

//   return strRepeated;
// }

function repeat(n, str) {
  const a = [];
  for (let i = 0; i < n; i++) {
    a.push(str);
  }

  return a.join("");
}

console.log(repeat(5, "Ah"));
