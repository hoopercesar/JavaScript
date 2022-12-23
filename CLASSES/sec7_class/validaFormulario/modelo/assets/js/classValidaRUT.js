class ValidaRUT {
  constructor(rutEnviado) {
    Object.defineProperty(this, "rutLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: rutEnviado.replace(/\D+/g, ""),
    });
  }

  valida() {
    let valor = true;
    if (this.rutLimpo === "unidefined") valor = false;
    if (this.rutLimpo.length < 8 || this.rutLimpo.length > 9) valor = false;
    if (this.esSequencia(this.rutLimpo)) valor = false;

    const rutParcial = this.rutLimpo.slice(0, -1);
    const digito = this.creaDigito(rutParcial);
    const rutNuevo = rutParcial + digito.toString();

    return rutNuevo === this.rutLimpo;
  }

  esSequencia() {
    return (
      this.rutLimpo.charAt(0).repeat(this.rutLimpo.length) === this.rutLimpo
    );
  }

  creaDigito(rutParcial) {
    // let digito;
    const rutArray = Array.from(rutParcial).reverse();
    let k = 2;
    const resultado = rutArray.reduce((ac, b) => {
      ac += b * k;
      k++;
      if (k === 8) k = 2;
      return ac;
    }, 0);

    if (11 - (resultado % 11) === 11) {
      return 0;
    } else if (11 - (resultado % 11) === 10) {
      return "K";
    } else {
      return 11 - (resultado % 11);
    }
  }
}
