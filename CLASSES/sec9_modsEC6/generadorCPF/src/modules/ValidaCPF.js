export default class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  esSequencia(cpfLimpo) {
    const cpfSecuencia = cpfLimpo[0].repeat(cpfLimpo.length);
    if (cpfSecuencia === cpfLimpo) return true;
  }

  static criaDigito(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let k = cpfArray.length + 1;
    let res = cpfArray.reduce((ac, b) => {
      ac += b * k;
      k--;
      return ac;
    }, 0);

    return 11 - (res % 11) > 9 ? 0 : 11 - (res % 11);
  }

  valida() {
    if (!this.cpflimpo) return false;
    if (typeof this.cpflimpo !== "string") return false;
    if (this.cpflimpo.length !== 11) return false;
    if (this.esSequencia(this.cpflimpo)) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    console.log(cpfParcial, this.cpfLimpo);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const cpfNuevo = cpfParcial + digito1.toString() + digito2.toString();

    return cpfNuevo === this.cpfLimpo;
  }
}

// console.log("cheguei aqui. se liga??");
