// 2 Arreglo con los nombres de cada tipo de cultivo,
// ordenados decrecientemente por la suma TOTAL
// de la cantidad de hectáreas plantadas de cada uno de ellos.
function sortPaddockTypeByTotalArea() {
  const retorno = [];
  paddockType.forEach((type) => {
    let datos = {};
    const id = type.id;
    const areaTotal = calculaAreas(id);
    datos["tipoCultivo"] = type.name;
    datos["hectareas"] = areaTotal / 10000;
    retorno.push(datos);
  });

  function calculaAreas(id) {
    let areas = 0;
    paddocks.forEach((paddock) => {
      if (id === paddock.paddockTypeId) {
        areas += paddock.area;
      }
    });
    return areas;
  }
  return retorno.sort((x, y) => y.hectareas - x.hectareas);
}
