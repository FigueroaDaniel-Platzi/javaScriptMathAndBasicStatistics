//============== MEDIANA ===================================================================
function esPar(lista) {
  return !(lista.length % 2);
}
function esImpar(lista) {
  return lista.length % 2;
}
function calcularMediana(listaDesordenada) {
  const lista = ordenarLista(listaDesordenada);
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
//=========================ORDENAR LISTA ====================================================
function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
     // if (valorAcumulado > nuevoValor) {
    //   return 1;
    // } else if (valorAcumulado == nuevoValor) {
    //   return 0;
    // } else if (valorAcumulado < nuevoValor) {
    //   return -1;
    // }
    return valorAcumulado - nuevoValor;
  }
  // const lista = listaDesordenada.sort(ordenarListaSort);
  const lista = listaDesordenada.sort((a, b) => a - b);
  return lista;
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