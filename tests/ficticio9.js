function newManagerRanking() {
  const nuevoAdministrador = {
    id: 7,
    taxNumber: "123456789",
    name: "NUEVO ADMINISTRADOR",
  };
  paddockManagers.push(nuevoAdministrador);

  const nuevoPaddock = {
    paddockManagerId: 7,
    farmId: 1,
    paddockTypeId: 4,
    harvestYear: 2017,
    area: 900,
  };
  paddocks.push(nuevoPaddock);

  const fundo = farms[0];

  const lugar = devuelveLugar(sortFarmManagerByAdminArea());

  function devuelveLugar(lista) {
    let counter = 0;
    for (let elem of lista) {
      counter++;
      if (elem.nombre === "NUEVO ADMINISTRADOR") return counter;
    }
  }

  return `El Nuevo Administrador está en la posición: ` + `${lugar}`;
}
