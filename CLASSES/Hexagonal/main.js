class Hexagonal {
  constructor() {
    this.imagenes = document.querySelectorAll(".img");
    this.events();
  }

  // administra eventos
  events() {
    this.imagenes.forEach((imagen) => {
      imagen.addEventListener("mouseover", (ev) => {
        this.handleOver(ev, imagen);
      });
    });

    this.imagenes.forEach((imagen) => {
      imagen.addEventListener("mouseout", (ev) => {
        this.borraMensajes();
      });
    });
  }

  // funciones mouseover
  handleOver(ev, imagen) {
    ev.preventDefault();
    this.creaMensaje(ev, imagen);
  }

  // función mouseout borra mensaje
  borraMensajes() {
    document.querySelector(".mensaje").remove();
  }

  creaMensaje(ev) {
    let div = document.createElement("div");
    div.innerHTML = `este es ${ev.toElement.classList[1]}`;
    div.style.fontSize = "20px";
    div.style.color = "black";
    div.classList.add("mensaje");
    document.querySelector(".gallery").insertAdjacentElement("afterend", div);
  }
}

const hexagonal = new Hexagonal();
