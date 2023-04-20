function mumbling(str) {
  const arr = str.toUpperCase().split("");
  const mapped = arr.map((c, i) => c + c.toLowerCase().repeat(i));
  return mapped.join("-");
}

console.log(mumbling("abcd"));
// "A-Bb-Ccc-Dddd"
