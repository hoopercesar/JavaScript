const request = (obj) => {
  const xhr = new XMLHttpRequest();
  xhr.open(obj.method, obj.url, true);
  xhr.send();

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      obj.success(xhr.responseText);
    } else {
      obj.error(xhr.statusText);
    }
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
}
