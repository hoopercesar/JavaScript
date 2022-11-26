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

// DEPOSITAR
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
  this.verFecha();
};

// VER SALDO
Conta.prototype.verSaldo = function () {
  this.verFecha();
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} | ` +
      `Saldo: R$${this.saldo.toFixed(2)}`
  );
};

// lA FECHA
Conta.prototype.verFecha = function () {
  const fecha = new Date();
  let indiceMes = fecha.getMonth();
  console.log(
    `${meses[indiceMes]}.${fecha.getDate()}.${fecha.getFullYear()} - ` +
      `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
  );
};

// RETIRAR
Conta.prototype.retirar = function (valor) {
  if (valor > this.saldo) {
    this.verFecha();
    console.log(`Saldo Insuficiente`);
    this.verSaldo();
    return;
  }
  this.saldo -= valor;
  this.verFecha();
  this.verSaldo();
};

// CUENTA CORRIENTE CC
function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

// RETIRAR de CC
CC.prototype.retirar = function (valor) {
  if (valor > this.saldo + this.limite) {
    this.verFecha();
    console.log(
      `Saldo Insuficiente. Saque Máximo: R$${this.saldo + this.limite}`
    );
    // this.verSaldo();
    return;
  }
  this.saldo -= valor;
  this.verFecha();
  this.verSaldo();
};

// CONTA POUPANÇA CP
function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cp = new CP(11, 22, 10);
cp.retirar(20);

console.log();

// const cuenta = new Conta(3922, 22, 30);
// cuenta.retirar(21);
// cuenta.verSaldo();

const cc = new CC(11, 22, 0, 100);
// cc.verSaldo();
cc.retirar(120);
