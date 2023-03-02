function farmManagerPaddocks() {
  let retorno = {};
  paddockManagers.map((manager) => {
    const id = manager.id;
    const nombre = manager.name;
    const camposAdministra = buscaCampos(id);
    retorno[`${nombre}`] = camposAdministra;
  });

  function buscaCampos(id) {
    let lista = [];
    paddocks.map((paddock) => {
      if (id === paddock.paddockManagerId) {
        let nombre = buscaNombreCampo(paddock.farmId);
        if (!lista.includes(nombre)) lista.push(nombre);
      }
    });
    // console.log(id, lista);
    return lista.sort();
  }

  function buscaNombreCampo(idFarm) {
    let nombre = "";
    farms.map((farm) => {
      if (idFarm === farm.id) nombre = farm.name;
    });
    return nombre;
  }
  return retorno;
}
