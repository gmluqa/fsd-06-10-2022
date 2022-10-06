let dia = "Jueves";
var mes = "Octubre";

function Fecha() {
  let dia = "Miercoles";
  var mes = "Noviembre";
  console.log(dia);
  console.log(mes);
}

// 'let' makes variables only exist within their local scope

Fecha();
console.log(dia);
console.log(mes);

// Function vs arrow function

// function Multiplicar(num1, num2) {
//   return num1 * num2;
// }

// Arrow function ALWAYS with const

// const Multiplicar = (num1, num2) => {
//   return num1 * num2;
// };

// INLINE arrow funciton

const Dividir = (num1, num2) => num1 / num2;

let resultado = Dividir(3, 3);

console.log(resultado);

// with only 1 param, no parentesis needed

const Exponente = numero => numero ** 2;

// Arrow functions returning objects (need parentesis)

// Wrong way, because the anon function thinks the {} is ANOTHER function
// const Pokemon = nombre => { monster: nombre }

// Right way
const Pokemon = nombre => ({ monster: nombre });

let boton = Pokemon("Charmander");

console.log(boton);

// Uso practico de arrow functions

let fruta = ["manzana", "pera", "fresa", "platano", "albaricoque"]

// variable.map, iterates on each element(anonFunction)

let frutasPlurales = fruta.map(postre => postre + "s")

console.log(frutasPlurales)

// placeholders in arrow funcs

const precioFinalImpuesto = (precio, impuesto = 0.21) => precio + (precio * impuesto);

console.log(precioFinalImpuesto(1200, 0.5))

// spread (...)
// (...arr) for each arr position, use as placeholders

const spread = (name, ps, atk, def, speed) => {
  console.log("Nombre: ", name);
  console.log("Vida: ", ps);
  console.log("Ataque: ", atk);
  console.log("Defensa: ", def);
  console.log("Velocidad: ", speed);
}


let pokemon = ["Pikachu", 35, 55, 40, 90]

// console.log(...pokemon) (...pokemon) returns an array of all elements

spread(...pokemon)

// REST

const Agrupar = (...argumentos) => { console.log(argumentos) }

Agrupar(1, 2, 3, 4, 5)
Agrupar(1, 2)


// most sumarrized way of asigning values to propeties
const Ppokemon = (nombre, tipo) => ({ nombre, tipo })

// string literals/interoperability

let favorito = "queso"

console.log(`my favorite is ${favorito}`)

// Destructuring array

let comida = ['spaghetti', 'sushi', 'paella', 'arroç']

let [uno, dos, tres, cuatro, cinco] = comida // This is the array destructured

console.log(tres)

// Destructuring object

let objeto = {
  grupo1: "Pink Floyd",
  grupo2: "Joan Macarra",
  grupo3: "Bad Bunny"
}

let { grupo1: rock, grupo2: punk, grupo3: trap_latino } = musica

console.log(rock, punk, trap_latino)