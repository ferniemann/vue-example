const names = ["Nico", "Kai"];
const namesAsJson = JSON.stringify(names);
console.log(namesAsJson);
localStorage.setItem("names", namesAsJson);

const namesFromStorage = localStorage.getItem("names");
const namesFromStorageParsed = JSON.parse(namesFromStorage);
console.log(namesFromStorageParsed);
