const data = new Date();
let diaSemana = data.getDay();
let texto;

switch (diaSemana) {
  case 0:
    texto = "Domingo";
    break;
  case 1:
    texto = "Lunes";
    break;
  case 2:
    texto = "martes";
    break;
  case 3:
    texto = "miercoles";
    break;
  case 4:
    texto = "jueves";
    break;
  case 5:
    texto = "viernes";
    break;
  case 6:
    texto = "sabado";
  default:
    texto = "No es día de la semana";
}

console.log(diaSemana, texto);
