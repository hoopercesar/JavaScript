let s = 0;
let m = 0;
const segundero = setInterval(function () {
  console.log(`${s}`, `${m}`);
  s++;
  if (s == 4) {
    m++;
  }
}, 100);

setTimeout(function () {
  clearInterval(segundero);
}, 600);

// let m = 0;
// if (s === 4) {
//   m++;
//   console.log(`${m}`);
// }
