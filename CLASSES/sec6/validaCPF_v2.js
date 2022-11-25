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

// aquí se crean todas las funciones (externas) necesarias para validar el cpf
VerificaCPF.prototype.valida = function () {
  // caso cpf nulo o indefindo
  if (typeof this.cpfLimpo === "undefined") return false;
  // caso cpf con cantidad de dígitos distinto de 11
  if (this.cpfLimpo.length != 11) return false;
  // caso cpf sequencial. todos números iguales: xxx.xxx.xxx - xx
  // ojo que cpf sequencial puede ser válido matemáticamente,
  // pero la receita federal do Brasil no permite cpf´s secuenciales
  // if (this.esSecuencia(this.cpfLimpo)) return "secuencia";
  if (this.esSecuencia(this.cpfLimpo)) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  console.log(cpfParcial, this.cpfLimpo);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);
  const cpfNuevo = cpfParcial + digito1.toString() + digito2.toString();

  return cpfNuevo === this.cpfLimpo ? true : false;
};

// función que verifica secuencia
VerificaCPF.prototype.esSecuencia = function (cpfLimpo) {
  const cpfSecuencia = cpfLimpo[0].repeat(cpfLimpo.length);
  if (cpfSecuencia === cpfLimpo) return true;
};

// esta función crea los dígitos verificadores
VerificaCPF.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let k = cpfArray.length + 1;
  let res = cpfArray.reduce((ac, b) => {
    ac += b * k;
    k--;
    return ac;
  }, 0);

  return 11 - (res % 11) > 9 ? 0 : 11 - (res % 11);
};

const cpf = new VerificaCPF("705.484.450-52");
// const cpf = new VerificaCPF("111.111.111-11");
const validacion = cpf.valida();
if (validacion) {
  console.log("CPF Correto");
} else {
  console.log("Erro no CPF");
}
