//Creacion de String

const primeraOpcion = 'Comillas simples';
const segundaOpcion = "Comillas dobles";
const terceraOpcion = `Comillas especiales`;


//Concatenacion
//1- Opcion +
const direccion = 'Calle falsa 123';
const ciudad = 'Sprinfield';
const direccionCompleta = 'Mi direccion completa es : '+ direccion +' '+ ciudad;

console.log(direccionCompleta)

//2- Con template literals
const nombre = 'Gabriel';
const pais = '🇻🇪';
const presentacion = `Hola soy ${nombre} y soy de ${pais}`;
console.log(presentacion);


//3-Utilizando join()
const primeraParte = 'Me encanta';
const segundaParte = 'la gente de'
const terceraParte = 'MX'
const pensamiento = [primeraParte,segundaParte,terceraParte];
console.log(pensamiento.join(' | '));


//4- Contatenacion : concat()
const hobbie1 = 'Correr';
const hobbie2 = 'Leer';
const hobbie3 = 'Programar';

const misHobbies = 'Mis hobbies son : '.concat(hobbie1,', ',hobbie2,', ',hobbie3,'.');
console.log(misHobbies);

//Caracteres de escapes
//1- Escape alternativo con ""
const escapeAlternativo = " I'm software Engineer";

//2- Barra invertida
const barraInvertida = 'I\'am Software Engineer';

//3- Template Literals
const escapeComillaInvertida = `I'M Software Engineer`;

console.log("\n")
//Estructura de String largos
const poema = `En el vasto mar de código, navegamos,
Bugs y errores, valientemente enfrentamos.
Con cada línea, un nuevo amanecer,
En el mundo de la programación, siempre hay algo que aprender. \n`

console.log(poema)
