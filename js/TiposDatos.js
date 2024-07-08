

//Primitivos
//string, number, boolean, null, undefined, symbol, bigint
//Complejos
//object, array, function


let numero = 23
numero = numero + 10
console.log(numero)
let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)
let usuario = { nombre: 'Pepito', edad: 15 }
usuario.edad = 20
console.log(usuario)
let frutas = ['manzana', 'pera']
frutas[0] = 'sandia'
console.log(frutas)
function cambiarNombre(objeto) { objeto.nombre = 'Nuevo nombre' }
let persona = { nombre: 'Antonio' }
cambiarNombre(persona)
console.log(persona)
