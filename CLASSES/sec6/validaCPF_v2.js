// para estas versión usaremos funciones constructoras
function VerificaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    configurable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

const cpf = new VerificaCPF("705.484.450-52");
console.log(cpf.cpfLimpo);
