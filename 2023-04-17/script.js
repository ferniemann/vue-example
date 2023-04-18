const busStops = [
  [5, 0], // bushaltestelle
  [1, 4],
  [3, 0],
];

// wieviele leute sitzen im Bus?

function pplInTheBus(stops) {
  //   if (!Array.isArray(stops)) {
  //     throw new Error("Parameter Stops is not an array");
  //   }

  let ppl = 0;

  //   stops.forEach(function (stop) {
  //     const pplIn = stop[0];
  //     const pplOut = stop[1];
  //     // const [pplIn, pplOut] = stop;

  //     ppl += pplIn - pplOut;
  //     // ppl = ppl + pplIn;
  //     // ppl = ppl - pplOut;
  //   });

  stops.forEach((stop) => {
    const pplIn = stop[0];
    const pplOut = stop[1];
    // const [pplIn, pplOut] = stop;

    ppl += pplIn - pplOut;
    // ppl = ppl + pplIn;
    // ppl = ppl - pplOut;
  });

  return ppl;
}

const ppl = pplInTheBus(busStops);

console.log(ppl);

// function add(a, b) {
//   const sum = a + b;
//   return sum;
// }

// const add = (a, b) => {
//   const sum = a + b;
//   return sum;
// };
