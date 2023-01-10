axios("pessoas.json").then((pessoas) => carregaDados(pessoas.data));

function carregaDados(pessoas) {
  const table = document.createElement("table");
  const resultados = document.querySelector(".resultados");
  for (let pessoa of pessoas) {
    const tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = pessoa.cpf;
    tr.appendChild(td3);

    table.appendChild(tr);
  }
  resultados.appendChild(table);
}
