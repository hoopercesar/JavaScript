function retornaFuncao(nome) {
  // const nome = "cesar";
  return function () {
    return nome;
  };
}
const funcao = retornaFuncao("luiz");
console.dir(funcao());
