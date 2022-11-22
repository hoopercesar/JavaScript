let lista = ["1", "2", "3", "4", "5", "6"];

let reducido = lista.reduce((a, b) => a + b);
console.log(typeof reducido, reducido); // string 123456
