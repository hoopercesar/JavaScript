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
    // newWind.close();
  }

  creaMensaje(ev) {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;
    let div = document.createElement("div");
    div.innerHTML = `este es ${ev.toElement.classList[1]}`;
    div.style.fontSize = "20px";
    div.style.color = "black";
    div.classList.add("mensaje");
    document.querySelector(".gallery").insertAdjacentElement("afterend", div);
    let newWind = window.open("/", "test", params);
    console.log(newWind);
    newWind.document.write("hola, mundo. este es un mensaje");
  }
}

const hexagonal = new Hexagonal();
