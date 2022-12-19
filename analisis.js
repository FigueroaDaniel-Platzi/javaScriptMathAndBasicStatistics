// Análisis personal para Juanita
function encontrarPersona(personaEnBusqueda) {
  return salarios.find(persona => persona.name == personaEnBusqueda);

  // const persona = salarios.find((persona) => {
  //  return persona.name == personaEnBusqueda;  
  //});
  // return persona;
}

function medianaPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  const salarios = trabajos.map(function(elemento) {
    return elemento.salario;
  });

  const medianaSalarios = PlatziMath.calcularMediana(salarios);
  return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
  trabajos = encontrarPersona(nombrePersona).trabajos;

  let porcentajesCrecimiento = [];

  for(let i = 0; i < trabajos.length; i++) {
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1];
    const crecimiento = salarioActual - salarioPasado;
    const porcentajeCrecimiento = crecimiento / salarioPasado;  
    porcentajesCrecimiento.push(porcentajeCrecimiento);
  }

  const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
  const ultimoSalario = trabajos[trabajos.length - 1];
  const aumento = ultimoSalario * medianaPorcentajeCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;

  return nuevoSalario;
}