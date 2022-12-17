function calcularPromedio(lista) {
  // Usando ciclos
  // let sumaLista = 0;
  // for(let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }

  function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }
  // Arrow function example
  // const ejemplo = (a, b) => a + b;
  // const sumerTodosElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor;
  // const sumaLista = lista.reduce((a, b) => a + b);

  const sumaLista = lista.reduce(sumarTodosElementos); // Usando método reduce  

  const promedio = sumaLista / lista.length;
  return promedio;
}