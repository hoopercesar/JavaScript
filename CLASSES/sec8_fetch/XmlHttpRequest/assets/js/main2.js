// ahora usando promise y async-await

const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener("click", (ev) => {
  const elem = ev.target;
  const tag = elem.tagName.toLowerCase();
  if (tag === "a") {
    ev.preventDefault();
    carregaPagina(elem);
  }
});

function carregaPagina(elem) {
  console.log(elem.getAttribute("href"));
  const href = elem.getAttribute("href");

  const objConfig = {
    method: "GET",
    url: href,
  };

  request(objConfig)
    .then((response) => {
      carregaResultado(response);
    })
    .catch((e) => console.log(e));
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
