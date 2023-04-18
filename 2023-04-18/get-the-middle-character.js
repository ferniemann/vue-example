// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

const middleChar = (str) => {
  if (str.length % 2 === 0) {
    const middle = str.length / 2;
    return str[middle - 1] + str[middle];
  } else {
    const middle = Math.floor(str.length / 2);
    return str[middle];
  }
};

console.log(middleChar("abba"));
