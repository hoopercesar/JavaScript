const puntosUsuario = 990;

const nivel = puntosUsuario >= 1000 ? "Usuario VIP" : "Usuario Normal";
const corUsuario = "";
const corNivel = corUsuario || "blue";

console.log(nivel, corNivel); // normal blue
