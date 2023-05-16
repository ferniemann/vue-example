# 2023-05-16

## Was wurde besprochen

- Fetch
- Review Quote App
- Review Color Mixer with API
- Promises

```js
console.clear();

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("yuhuu");
  },2000)
});


p.then(
  // resolve / positiver fall
  (data) => {
    console.log("Promise resolved: ", data)
  },
  () => {
    console.log("Promise rejected")
  }
)
```

## Todos bis morgen

- Review von https://github.com/nicokoenig/vue-password-check
- CMDer installieren bei Nutzung von Windows (https://cmder.app/)
- Stoff durcharbeiten
  - Introduction to Node: https://classroom.coding-bootcamps.eu/products/restful-backends/categories/2149867723
  - Project Setup and Management with NPM: https://classroom.coding-bootcamps.eu/products/restful-backends/categories/2149867796
  - Rest and Restful Backends durcharbeiten bis Kapitel https://classroom.coding-bootcamps.eu/products/restful-backends/categories/2149963424






