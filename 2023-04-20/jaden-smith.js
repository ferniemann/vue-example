// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

function jadify(str) {
  let arr = str.split(" ");

  arr = arr.map((w) => {
    const firstLetter = w.charAt(0).toUpperCase();
    const restLetters = w.slice(1, w.length);
    return firstLetter + restLetters;
    //return w.toUpperCase();
    // return undefined;
  });

  return arr.join(" ");
}

console.log(jadify("How can mirrors be real?"));
// "How Can Mirrors Be Real?"
