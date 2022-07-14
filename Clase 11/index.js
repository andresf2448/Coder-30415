/* let num = 20;
num = num + 1;
num += 1;
num++; */

/* for(let i = 0; i < 5; i++){

}

let i = 0;

while(i < 20){
  console.log("hola");
  i++;
} */

/* let edad = 20;
let nombre = "jaime";

if(edad >= 18){
  console.log("es mayor de edad");
}else{
  console.log("no es mayor de edad");
}

edad > 18 ? console.log("es mayor de edad") : console.log("no es mayor de edad");

edad > 18 ? (nombre === "jaime" ? console.log("puedes entrar") : console.log("eres mayor de edad pero no puedes entrar")) : console.log("no es mayor de edad"); */

/* const usuario = {
  nombre: "andres",
  edad: 22
}; */
// let permiso;

/* if(usuario.edad >= 18){
  permiso = true;
}else{
  permiso =false;
}

if(permiso){
  console.log("puedes entrar");
}else{
  console.log("no puedes entrar");
} */

/* let permiso = (usuario.edad >= 18) ? true : false;
permiso ? console.log("puedes entrar") : console.log("no puedes entrar"); */
/* 
const productos = []; */

/* if(productos.length === 0){
  console.log("los productos están vacios");
} */

/* productos.length === 0 && console.log("los productos están vacios"); */

/* 
&&
operador1 && operador2
si operador1 representa un valor true entonces retorna el operador2
de lo contrario retorna operador1
*/

/* const usuario = {
  nombre: "andres",
  edad: 17
};

const registro = usuario.edad >= 18 && new Date();
console.log(registro); */

/* 
||
operador1 || operador2
si operador1 no es un valor que represente false entonces retorna operador1
de lo contrario retorna operador2
*/

// console.log( 0 || "Falsy")
// console.log( 40 || "Falsy") 
// console.log( null || "Falsy")  
// console.log( undefined || "Falsy")  
// console.log( "Hola Mundo" || "Falsy")  
// console.log( "" || "Falsy")  
// console.log( NaN || "Falsy")  
// console.log( true || "Falsy")  
// console.log( false || "Falsy")
/* localStorage.setItem("carrito", JSON.stringify([{nombre: "camisa", precio: 1000}])) */

/* let carrito; */

/* let carritoStorage = JSON.parse(localStorage.getItem("carrito")); */

/* if(carritoStorage){
  carrito = carritoStorage;
}else{
  carrito = [];
} */

/* let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(carrito); */

// console.log(0 ?? "hola");
// console.log("" ?? "hola");
// console.log(0 ?? "hola");
// console.log(0 || "hola");
// console.log(null || "hola");

/* 
??
operador1 ?? operador2
si operador1 es igual a undefined o null entonces retorna operador2
de lo contrario retorna operador1
*/

/* const producto = {
  nombre: "pan",
  precio: 1234,
  ingredientes: {
    sal: 10,
    color: 1
  }
}; */

// console.log(producto?.nombre || "el producto no existe");
/* console.log(producto?.ingredientes?.sal || "La propiedad no existe"); */

/* const usuario = {
  nombre: "andres",
  edad: 17,
  telefono: {
    cel: 1234,
    trabajo: 4321
  }
}; */

/* let nombre = usuario.nombre;
let edad = usuario.edad; */
/* let { 
  nombre,
  telefono: {
    cel,
    trabajo
  }
} = usuario;


console.log(cel); */
/* const usuario = {
  nombre: "andres",
  edad: 17,
};

let {nombre: nameUser, edad: age} = usuario;
console.log(nameUser);
console.log(age); */

/* let producto1 = {nombre: "pan", precio: 1000};
let producto2 = {...producto1};

producto2.nombre = "cafe";
console.log(producto1); */

/* let numero1 = 3;
let numero2 = numero1;
numero2 = 6;
console.log(numero1); */

/* function mostrarProducto({nombre, precio}){
  console.log(nombre);
  console.log(precio);
}
let producto1 = {nombre: "pan", precio: 1000};

mostrarProducto(producto1); */

/* const productos = [{nombre: "camisa", precio: 1000}, "zapato", "gorra", "pantalon"];
const [a,,c,d] = productos;

console.log(a);

console.log(c);
console.log(d); */

/* const productos = ["camisa", "zapato", "gorra", "pantalon"];
console.log(...productos);
console.log(productos.join(" ")); */

/* const numeros = [1000,2,3,4,5,45,90,123];
console.log(Math.max(...numeros)); */

/* const usuario = {
  nombre: "andres",
  edad: 10
}

const usuario2 = {
  ...usuario,
  edad: 20,
  direccion: "AV"
}

console.log(usuario2); */

function mostrar(...productos){
  console.log(productos);
}

mostrar("zapato", "gorra", "pantalon", "camisa", "pan", 1, 2);