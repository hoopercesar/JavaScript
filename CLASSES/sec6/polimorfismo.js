// superclass
// crearemos una cuenta de banco
const meses = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC",
];

function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
  this.verFecha();
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} | ` +
      `Saldo: R${this.saldo.toFixed(2)}`
  );
};

Conta.prototype.verFecha = function () {
  const fecha = new Date();
  let indiceMes = fecha.getMonth();
  console.log(
    `${meses[indiceMes]}.${fecha.getDate()}.${fecha.getFullYear()} - ` +
      `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
  );
};

Conta.prototype.retirar = function (valor) {
  if (valor > this.saldo) {
    this.verFecha();
    console.log(`Saldo Insuficiente. Saldo R$${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verFecha();
  this.verSaldo();
};

Conta.prototype.da;

const cuenta = new Conta(3922, 22, 30);
cuenta.retirar(50);
// cuenta.verSaldo();
