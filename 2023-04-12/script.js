// // The function has a first parameter for a word which is a string.
// // The function has a second parameter which contains the character to search for which is a string.
// // Check if the second parameter consists of only one character, if not, quit the function.
// // The function returns the number of times the character from the second parameter is present in the word.
// // The function should be case insensitive.
// // TODO: Implement the charCount function

function charCount(word, char) {
  char = char.toLowerCase();
  word = word.toLowerCase();

  let count = 0;
  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i];
    if (currentChar === char) {
      count++;
    }
  }

  return count;
}

console.log(charCount("Anna", "A"));
// result should be: 2

// console.log(charCount("mama", "m"));
// // result should be: 2

// console.log(charCount("Resümee", "e"));
// // result should be: 3

function removeItem(arr, pos) {
  const index = pos - 1;
  const part1 = arr.slice(0, index);
  const part2 = arr.slice(index + 1);

  const newArray = part1.concat(part2);
  return newArray;
  //const copy = arr.slice();
  //copy.splice(pos - 1, 1);
  //return copy;
}

const ainmals = ["Dog", "Cat", "Lion"];
console.log(ainmals);
console.log(removeItem(ainmals, 1));
