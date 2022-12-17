//============== MEDIANA ===================================================================
function esPar(lista) {
  return !(lista.length % 2);
}
function esImpar(lista) {
  return lista.length % 2;
}
function calcularMediana(lista) {
  const listaEsPar = esPar(lista);

  if(listaEsPar) {
    const indexMitad1ListaPar = (lista.length / 2) - 1;
    const indexMitad2ListaPar = lista.length / 2;

    const listaMitades = [];
    listaMitades.push(lista[indexMitad1ListaPar]);
    listaMitades.push(lista[indexMitad2ListaPar]);

    const medianaListaPar = calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2); // Using Math.floor
    const medianaListaImpar = lista[indexMitadListaImpar];
    return medianaListaImpar
  }
}
//=============== PROMEDIO ==================================================================
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
//===========================================================================================