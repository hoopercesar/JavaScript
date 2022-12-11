class ValidaCPF {
  constructor(cpfEnviado) {
    this.cpfEnviado = cpfEnviado;
  }

  valida() {
    return limpiaCPF(this.cpfEnviado);
  }

  limpiaCPF(valor) {
    return valor.replace(/\D+/g, "");
  }
}

const cpf = new ValidaCPF("333.444.555.2");
cpf.limpiaCPF();
console.log(cpf.valida());
