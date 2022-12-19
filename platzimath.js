// Creating object 
const PlatziMath = {};

//============== MEDIANA ===================================================================
PlatziMath.esPar = function esPar(lista) {
  return !(lista.length % 2);
}
PlatziMath.esImpar = function esImpar(lista) {
  return lista.length % 2;
}
PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
  const lista = PlatziMath.ordenarLista(listaDesordenada);
  const listaEsPar = PlatziMath.esPar(lista);

  if(listaEsPar) {
    const indexMitad1ListaPar = (lista.length / 2) - 1;
    const indexMitad2ListaPar = lista.length / 2;

    const listaMitades = [];
    listaMitades.push(lista[indexMitad1ListaPar]);
    listaMitades.push(lista[indexMitad2ListaPar]);

    const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
    return medianaListaPar;
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2); // Using Math.floor
    const medianaListaImpar = lista[indexMitadListaImpar];
    return medianaListaImpar
  }
}
//=========================ORDENAR LISTA ====================================================
PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
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
PlatziMath.calcularPromedio = function calcularPromedio(lista) {
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
//================= MODA =====================================================================
PlatziMath.calcularModa = function calcularModa(lista) {
  const listaCount = {};

  for(let i=0; i < lista.length; i++) {
    const elemento = lista[i];
    if(listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }

  const listaArray = Object.entries(listaCount); // Using Object.entries
  const listaOrdenada = ordenarListaBidimensional(listaArray,1);
  const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
  const moda = listaMaxNumber[0];
  
  return moda;
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[i] - nuevoValor[i];
  }
  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
}