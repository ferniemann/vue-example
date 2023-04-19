function vowelCount(str) {
  const arr = str.toLowerCase().split("");
  const vowels = ["a", "e", "i", "o", "u"];
  const xxx = arr.filter((c) => vowels.includes(c));

  return xxx.length;
}
// function vowelCount(str) {
//   const arr = str.split("");
//   console.log(arr);

//   const vowels = arr.filter(
//     (char) =>
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//   );

//   return vowels.length;
// }

console.log(vowelCount("Abcd"));
