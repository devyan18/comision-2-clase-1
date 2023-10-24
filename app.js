// var

// let

//var hola = "asdas"

function sayHello () {
  var chau = "asdasd"

  console.log(hola, chau)
}

// console.log(chau)

// const => no puede ser reasignado


// string

const hola = "hola mundo"
const chau = ", chau mundo"

function sayHello2 () {
  return "123123"
}

// desestructuración

// objetos
const persona = {
  nombre: "Agustin",
  apellido: "Arnedo",
  dni: 12312323,
  edad: 20
}

const { apellido, dni, edad, nombre } = persona

// console.log(`Hola!, me llamo: ${nombre} ${apellido}, tengo ${edad} año de edad y mi dni es: ${dni}.`)

// Arrays

const days = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes"
]

const [ lunes, martes, miercoles, jueves, viernes ] = days

// console.log(lunes, martes, miercoles, jueves, viernes)

// REST OPERATOR

const [ diaLunes, diaMartes, diaMiercoles, ...resto ] = days

// SPREAD OPERATOR

const alumnosTramo1 = [
  "Cesar",
  "Jonux",
  "Gabriela"
]

const alumnosTramo2 = [
  "Federico",
  "Bruno",
  "Antonio",
  ...alumnosTramo1,
  "Bruno"
]

const alumno = {
  nombre: "Gabriela",
  apellido: "Linares",
  edad: 20
}

const alumnoWithEmail = {
  email: "ejemplo@ejemplo.com",
  edad: 21,
  ...alumno, // <--- el orden es importante a la hora de reemplazar las propiedades.
}

// console.log(alumnoWithEmail)

// console.log(alumnosTramo2)

// Manipulación de arrays

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12]

const pares = numeros.filter(e => !(e % 2))
const impares = numeros.filter(e => e % 2)

console.log(pares)
console.log(impares)

const doble = numeros.map((num) => num * 2)

console.log(doble)

numeros.forEach((num) => {
  //console.log(num)
})

const miNumero = 12

const existe = numeros.find((num) => num === miNumero)

console.log(existe)

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2) {
//     impares.push(numeros[i])
//   } else {
//     pares.push(numeros[i])
//   }
// }

//console.log({ pares })
//console.log({ impares })