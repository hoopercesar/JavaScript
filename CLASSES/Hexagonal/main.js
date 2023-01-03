class Hexagonal {
  constructor() {
    this.imagenes = document.querySelectorAll(".img");
    this.events();
  }

  events() {
    this.imagenes.forEach((imagen) => {
      imagen.addEventListener("mouseover", (ev) => {
        this.handleOver(ev, imagen);
      });
    });
  }

  handleOver(ev, imagen) {
    ev.preventDefault();
    this.creaMensaje(ev, imagen);
    console.log(ev.toElement.classList[1]);
  }

  creaMensaje(ev, imagen) {
    let div = document.createElement("div");
    div.innerHTML = `este es ${ev.toElement.classList[1]}`;
    div.style.fontSize = "20px";
    div.style.color = "black";
    div.classList.add("mensaje");
    document.querySelector(".gallery").insertAdjacentElement("afterend", div);
  }
}

const hexagonal = new Hexagonal();
