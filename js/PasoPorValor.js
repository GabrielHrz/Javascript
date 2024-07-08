//Paso por valor1.
// Paso por Valor:
//
// En el paso por valor, se pasa una copia del valor de la variable como argumento a la función.
// Esto significa que cualquier modificación realizada dentro de la función no afecta a la variable original
// fuera de la función.
// Este enfoque es común en lenguajes que trabajan con tipos de datos primitivos
// (números, strings, booleanos, etc.).
let numero = 123;

numero = 4444;

//Paso por referencia
/*En el paso por referencia, se pasa la referencia a la ubicación en memoria de la variable como argumento
a la función. Cualquier modificación realizada
dentro de la función afecta directamente a la variable original fuera de la función.
  Este enfoque es común en lenguajes que trabajan con objetos y estructuras de datos más complejas.*/
let frutas = ['manzana','Pera'];
frutas.push('Durazno');

console.log(frutas)

let copiaArray = clon
