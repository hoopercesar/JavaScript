// IIFE -> Immediately Invoked Function Expression
// función autoconvocada

(function diMiNombre(nome) {
  console.log(`Mi nombre es ${nome}`);
})("pepe");

(function suma(a, b) {
  console.log(a + b);
})(3, 7);

const tres = (function (nacimiento) {
  return 2022 - nacimiento;
})(2000);
console.log(tres);

function tuEdad() {
  const edad = (function (nacimiento) {
    return 2022 - nacimiento;
  })(1998);
  return `tu edad es ${edad}`;
}
console.log(tuEdad());
