function biggestCherriesManagers() {
  let area = 0;
  let nombre = "";
  let retorno = [];
  let datos = {};
  paddocks.map((paddock) => {
    if (paddock.farmId === 3) {
      if (paddock.paddockTypeId === 3) {
        area += paddock.area;
        nombre = buscaPersona(paddock.paddockManagerId);
      }
    }
    datos["nombre"] = nombre;
    if (area > 1000) datos["area"] = area;
  });
  retorno.push(datos);

  function buscaPersona(id) {
    let nombre = "";
    paddockManagers.map((manager) => {
      if (id === manager.id) nombre = manager.name;
    });
    return nombre;
  }
  return retorno.sort((a, b) => {
    if (a.nombre < b.nombre) return -1;
    if (a.nombre > b.nombre) return 1;
    if (a.nombre === b.nombre) return 0;
  });
}
