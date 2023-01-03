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
    console.log(imagen.classList[1]);
  }
}

const hexagonal = new Hexagonal();
