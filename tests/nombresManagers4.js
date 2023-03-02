function farmManagerNames() {
  let retorno = [];
  farms.forEach((farm) => {
    const datos = {};
    const id = farm.id;
    datos[`${farm.name}`] = obtieneTodosRuts(id);
    retorno.push(datos);
  });

  function obtieneTodosRuts(id) {
    let ruts = [];
    paddocks.forEach((paddock) => {
      if (id === paddock.farmId) {
        ruts.push(obtieneRut(paddock.paddockManagerId));
      }
    });

    // ordena alfabéticamente por nombre
    ruts = ruts.sort((a, b) => {
      if (a.nombre < b.nombre) return -1;
      if (a.nombre > b.nombre) return 1;
      if (a.nombre === b.nombre) return 0;
    });

    // retorna arreglo con ruts no reptidos
    return eliminaRepetidos(ruts);
  }

  function eliminaRepetidos(lista) {
    // elimina los repetidos y elimina el nombre
    let unicos = [];
    lista.map((objeto) => {
      if (!unicos.includes(objeto.rut)) return unicos.push(objeto.rut);
    });
    return unicos;
  }

  // obtiene el rut y el nombre. el nombre es útil
  // para ordenar alfabéticamente.
  function obtieneRut(id) {
    let rut = "";
    let nombre = "";
    let lista = {};

    paddockManagers.forEach((manager) => {
      if (id === manager.id) {
        rut = manager.taxNumber;
        nombre = manager.name;

        lista["rut"] = rut;
        lista["nombre"] = nombre;
      }
    });

    return lista;
  }

  return retorno;
}
