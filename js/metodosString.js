//String primitivos - inmutables
const StringPrimitivo = 'Soy un string primitivo';
console.log(typeof StringPrimitivo)


const StringPrimitivoTambien = String('Soy un estring Primitivo')
console.log(typeof StringPrimitivo)

//String objetos mutables
const StringTipoObjetos = new String('Soy un String objeto')
console.log(typeof StringTipoObjetos)

//Manipular String
const saludo = 'Hola. Como estas?'
console.log(saludo[0])
console.log(saludo.charAt(0))
console.log(saludo.indexOf('Como'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3,5))
console.log(saludo.length)
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())

const saludoDividido = saludo.split(' ')
console.log(saludoDividido)

const saludoConEspacio = ' Hola Mundo ';
const saludoSinEspacios = saludoConEspacio.trim();
console.log(saludoConEspacio)
console.log(saludoSinEspacios)

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo','Programador')
console.log(nuevoSaludo)
