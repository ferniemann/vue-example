function isIsogram(str) {
  const chars = str.toLowerCase().split("");

  for (let i = 0; i < chars.length; i++) {
    // console.log(chars);
    const char = chars[i];
    // console.log(i);
    // console.log(char);
    const copy = chars.slice();
    copy.splice(i, 1);
    // console.log(copy);

    if (copy.find((item) => item === char)) {
      return false;
    }
    // console.log("-----");
  }
  // console.log(chars);
  return true;
}

console.log(isIsogram("abcda"));
