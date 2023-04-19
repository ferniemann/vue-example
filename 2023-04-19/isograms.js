function isIsogram(str) {
  const set = new Set(str.toLowerCase().split(""));
  return set.size === str.length;
}

console.log(isIsogram("nico"));
