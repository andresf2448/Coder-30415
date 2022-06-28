/* function mayorQue(n){
  return m => m > n;
}

let mayorQueCinco = m => m > 5;

console.log(mayorQueCinco(4)); */

/* function operaciones(operacion){
  if(operacion === "suma"){
    return (x, y) => x + y;
  }

  if(operacion === "resta"){
    return (x, y) => x - y;
  }

  if(operacion === "multiplicacion"){
    return (x, y) => x * y;
  }

  if(operacion === "division"){
    return (x, y) => x / y;
  }
}

let suma = operaciones("suma");
console.log(suma(7,3));

let resta = operaciones("resta");
console.log(resta(7,3)); */

/* function recorre(arr, fn){
  for(const elemento of arr){
    fn(elemento);
  }
}

const valores = [1, 3, 5, 20];

recorre(valores, console.log); */

/* const numeros = [1, 2, 3, 4, 5, 20, 30, 70];

numeros.forEach((elemento) => { //el forEach recorre cada uno de los elementos del arreglo y ejecuta ciertas lineas de codigo con este elemento
  console.log(elemento);
}); */

/* const productos = [
  {nombre: "zapato", precio: 1000},
  {nombre: "media", precio: 100},
  {nombre: "gorra", precio: 700},
  {nombre: "camisa", precio: 1500},  
];

//el find busca un elemento dentro del arreglo
let busqueda = prompt("Ingrese el nombre producto a buscar su precio").toLowerCase();

let producto = productos.find(elemento => elemento.nombre === busqueda);
alert(`El precio del producto ${busqueda} es ${producto.precio}`); */

/* const productos = [
  {nombre: "zapato", precio: 1000},
  {nombre: "media", precio: 100},
  {nombre: "gorra", precio: 700},
  {nombre: "camisa", precio: 1500},  
];
//el filter filtra los elementos que cumplan la condicion pedida
let filtrados = productos.filter(elemento => elemento.precio > 800);
console.log(filtrados); */

/* const productos = [
  {nombre: "zapato", precio: 1000},
  {nombre: "media", precio: 100},
  {nombre: "gorra", precio: 700},
  {nombre: "camisa", precio: 1500},  
];

let valor = productos.some(elemento => elemento.precio === 800);
console.log(valor); */

/* const productos = [
  {nombre: "zapato", precio: 1000},
  {nombre: "media", precio: 100},
  {nombre: "gorra", precio: 700},
  {nombre: "camisa", precio: 1500},  
];

let precios = productos.map(elemento => elemento.precio);
console.log(precios);

let nombres = productos.map(elemento => elemento.nombre);
console.log(nombres); */

/* const carrito = [
  {nombre: "zapato", precio: 1000},
  {nombre: "media", precio: 100},
  {nombre: "gorra", precio: 700},
  {nombre: "camisa", precio: 1500},  
];

const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
console.log(total); */

/* const numeros = [20, 7, 8, 1];

console.log(numeros.sort((a, b) => a - b));
console.log(numeros.sort((a, b) => b - a)); */

/* const items = [
  { name: 'Pikachu', price: 21 },
  { name: 'Charmander', price: 37 },
  { name: 'Pidgey', price: 45 },
  { name: 'Squirtle', price: 60 }
]
console.log(items.sort((a, b) => {
  if (a.name > b.name) {
      return -1;
  }
  if (a.name < b.name) {
      return 1;
  }
  // a es igual a b
  return 0;
})); */

/* const productos = [
  {nombre: "zapato", precio: 1000, peso: 1},
  {nombre: "media", precio: 100, peso: 2},
  {nombre: "gorra", precio: 700, peso: 3},  
];

let precios = productos.map(elemento => {
  return {
    precio: elemento.precio + 1,
    nombre: elemento.nombre
  }
});
console.log(precios); */

/* console.log(Math.E);
console.log(Math.PI); */

/* console.log(Math.max(1,5,6,34,90));
console.log(Math.min(1,5,6,34,90));

console.log(Math.max(1,5,6,Infinity,34,90));
console.log(Math.min(1,5,6,-Infinity,34,90)); */

/* console.log(Math.ceil(4.4));
console.log(Math.floor(4.6));
console.log(Math.round(4.6));
console.log(Math.round(4.4)); */
/* console.log(Math.sqrt(9)); */
/* console.log(Math.random() * 10); */
/* 
console.log(Date()); */
/* console.log(new Date(2022,5,27)); */
/* const hoy = new Date(2022,5,27); */
/* console.log(hoy.getFullYear());
console.log(hoy.getMonth());
console.log(hoy.getDay()); */

/* console.log( hoy.toDateString() ) 
console.log( hoy.toLocaleString() ) 
console.log( hoy.toLocaleDateString() ) 
console.log( hoy.toTimeString() ) */

/* const navidad = new Date("December 25, 2022")
const hoy = new Date("June 27, 2022")

console.log( navidad - hoy )

const milisegundosPorDia = 86400000

console.log( (navidad - hoy ) / milisegundosPorDia) */

/* const inicio = new Date()

for (let i = 0; i < 1000; i++) {
    console.log("haciendo tiempo")
}

const final = new Date();

console.log("El proceso tardó: " + (final - inicio) + " milisegundos") */
/* let productos = [];
for (let index = 0; index < 10; index++) {
  let nombre = prompt("ingresa el nombre del producto");
  let precio = prompt("ingresa el precio del producto");

  productos.push({ nombre: nombre, precio: precio });
} */