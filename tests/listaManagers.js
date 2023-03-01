// 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
function listPaddockManagersByName() {
  const responsables = [];
  paddocks.forEach((paddock) => {
    let datos = {};
    const id = paddock.paddockManagerId;
    const [rut, nombre] = buscaPersona(id);
    datos[rut] = nombre;
    responsables.push(datos);
  });

  function buscaPersona(id) {
    for (let k of paddockManagers) {
      if (id === k.id) {
        return [k.taxNumber, k.name];
      }
    }
  }
  return responsables;
}
