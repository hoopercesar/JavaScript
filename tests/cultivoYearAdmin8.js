function paddocksManagers() {
  let retorno = [];
  paddockType.map((type) => {
    const id = type.id;
    const nombreCultivo = type.name;
    const info = obtieneInfo(id, nombreCultivo);
    info.map((elem) => {
      retorno.push(elem);
    });
  });

  function obtieneInfo(id, nombreCultivo) {
    let info = [];

    paddocks.map((paddock) => {
      let dato = {};
      let temp = {};

      if (id === paddock.paddockTypeId) {
        dato[`${paddock.paddockManagerId}`] = obtieneNombre(
          paddock.paddockManagerId
        );

        temp[`${nombreCultivo}` + "-" + `${paddock.harvestYear}`] = dato;

        info.push(temp);
      }
    });

    return info;
  }

  function obtieneNombre(id) {
    let nombre = "";
    paddockManagers.map((manager) => {
      if (id === manager.id) nombre = manager.name;
    });
    return nombre;
  }
  return retorno;
}
