// I can arrange in groups console messages
console.group('Cuadrado');

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

// You can print objects in console.
console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
})

// Function can return object
function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  }
}
console.groupEnd('Cuadrado');

console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  }
}

function calcularAlturaTriangulo(lado1, base) {
  if(lado1 == base) {
    console.warn('Este no es un triangulo isosceles');
  } else {
    return Math.sqrt((lado1 ** 2) - ((base ** 2) / 4));
  }
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
})
console.groupEnd('Triangulo');

console.group('Circle');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI; // Una forma de usar exponentes.

function calcularCirculo(radio){
  const diametro = radio * 2;
  const radioAlCuadrado = Math.pow(radio, 2) // Otra forma de usar exponentes.

  return {
    circunferencia: diametro * Math.PI, // Usando Math.PI.
    area: radioAlCuadrado * Math.PI,
  }
}

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo,
})


console.groupEnd('Circle');