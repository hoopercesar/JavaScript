class Operaciones {
  constructor(num1, num2, num3) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
  }

  static sumar(a, b, c) {
    console.log(a + b + c);
  }

  static restar(a, b, c) {
    console.log(a - b - c);
  }

  static cuadratica(a, b, c) {
    let x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
    console.log(x1);
  }

  static this(a, b) {
    console.log(this);
  }
}

Operaciones.sumar(1, 2, 3);
Operaciones.cuadratica(1, 2, 1);
Operaciones.this(1, 2);
