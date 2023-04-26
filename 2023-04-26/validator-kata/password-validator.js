function validatePassword(password) {
  // Add you solution here
  // return {
  //   valid: true,
  //   reasons: [],
  // };
}

// function hasConsecutiveNumbers(str) {
//   // "ab124"

//   const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

//   for (let i = 0; i < str.length - 1; i++) {
//     const currentChar = str.charAt(i);
//     if (numbers.includes(currentChar)) {
//       // console.log(c + " ist in " + numbers + " enthalten");
//       // indexCurrentChar = 0
//       const indexCurrentChar = numbers.indexOf(currentChar); // currentChar

//       const nextChar = str.charAt(i + 1);
//       // indexNextChar = 1
//       const indexNextChar = numbers.indexOf(nextChar);

//       if (indexCurrentChar + 1 === indexNextChar) {
//         return true;
//       }
//     }
//   }
//   return false;
//   // return true/false;
// }

// function hasConsecutiveNumbers(str) {
//   for (let i = 0; i < str.length - 1; i++) {
//     const currentChar = str.charAt(i);
//     const currentCharAsNumber = Number(currentChar);
//     if (
//       typeof currentCharAsNumber === "number" &&
//       isNaN(currentCharAsNumber) === false
//     ) {
//       const nextChar = str.charAt(i + 1);
//       if (currentCharAsNumber + 1 == nextChar) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// function hasConsecutiveCharacters(str) {
//   const chars = "abcdefghij";
//   for (let i = 0; i < str.length - 1; i++) {
//     const currentChar = str.charAt(i);
//     if (chars.includes(currentChar)) {
//       const indexCurrentChar = chars.indexOf(currentChar); // currentChar

//       const nextChar = str.charAt(i + 1);
//       const indexNextChar = chars.indexOf(nextChar);

//       if (indexCurrentChar + 1 === indexNextChar) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

function hasConsecutiveCharacters(str) {
  return hasConsecutiveSequenz(str, "abcdefghijklmnopqrstuvwxyz");
}

function hasConsecutiveNumbers(str) {
  return hasConsecutiveSequenz(str, "123456789");
}

function hasConsecutiveSequenz(str, sequenz) {
  for (let i = 0; i < str.length - 1; i++) {
    const currentChar = str.charAt(i);
    if (sequenz.includes(currentChar)) {
      const indexCurrentChar = sequenz.indexOf(currentChar); // currentChar

      const nextChar = str.charAt(i + 1);
      const indexNextChar = sequenz.indexOf(nextChar);

      const xxx = currentChar + nextChar;

      if (indexCurrentChar + 1 === indexNextChar) {
        return true;
      }
    }
  }
  return false;
}
