function biggestAvocadoFarms() {
  let retorno = [];
  farms.forEach((farm) => {
    let datos = {};
    const id = farm.id;
    const area = calculaArea(id);

    // la condicion es que tengan más de 2 hectáreas con paltas
    if (area > 20000) {
      datos["nombre"] = farm.name;
      datos["area"] = area;
      return retorno.push(datos);
    }
  });

  function calculaArea(id) {
    let areas = 0;
    paddocks.forEach((paddock) => {
      if (id === paddock.farmId) {
        if (paddock.paddockTypeId === 1) {
          areas += paddock.area;
        }
      }
    });
    return areas;
  }
  return retorno.sort((a, b) => b.area - a.area);
}
