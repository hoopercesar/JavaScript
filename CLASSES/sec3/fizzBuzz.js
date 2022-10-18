let texto;
function fizzBuzz(n) {
  if (typeof n != "number") {
    texto = n;
  } else if ((n + 1) % 15 === 0) {
    texto = "fizzBuzz";
  } else if ((n + 1) % 5 === 0) {
    texto = "buzz";
  } else if ((n + 1) % 3 === 0) {
    texto = "fizz";
  } else {
    texto = n + 1;
  }
  return texto;
}

// console.log(fizzBuzz("pico"));

for (let k = 0; k <= 35; k++) {
  console.log(fizzBuzz(k));
}
