/* 
estructura de una funcion

function mensaje(param1, param2, param3, ...){
  codigo a ejecutar
}
*/

/* function mensaje(){
  console.log("Hola a todos");
}

mensaje(); */

/* function pedirDatos(){
  let nombre = prompt("Hola como estas? Ingresa el nombre");
  alert("El nombre ingresado es: " + nombre);
}

pedirDatos();
pedirDatos();
pedirDatos();
pedirDatos();
pedirDatos();
pedirDatos();
pedirDatos();
pedirDatos();
pedirDatos();
pedirDatos(); */

/* function pedirDatos(nombre, apellido){
  console.log(`Hola como estas ${nombre} ${apellido}`);
}

pedirDatos("andres", "ruiz");
pedirDatos("juanita", "ruiz");
pedirDatos("camila","ruiz"); */

/* function pedirDatos(nombre, apellido){
  console.log(`Hola como estas ${nombre} ${apellido}`);
}

console.log(pedirDatos("andres", "ruiz")); */

/* function sumar(num1, num2){
  return num1 + num2;
}

let resultado = sumar(4, 5);
console.log(resultado - 20); */

function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
      case "+":
          return primerNumero + segundoNumero;
          break;
      case "-":
          return primerNumero - segundoNumero;
          break;
      case "*":
          return primerNumero * segundoNumero;
          break;
      case "/":
          return primerNumero / segundoNumero;
          break;
      default:
          return 0;
          break;
  }
}

/* console.log(calculadora(10, 5, "*"));
console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 5, "/")); */
/* let primerNumero = prompt("ingrese el primer numero");
let segundoNumero = parseInt(prompt("ingrese el segundo numero"));
let operacion = prompt("ingrese la operacion");

alert(calculadora(primerNumero, segundoNumero, operacion)); */
/* let apellido = "Vela";

{
  let nombre = "andres";
  console.log(apellido);
}


console.log(nombre); */

/* let resultado = 0; */

/* function adicionar(num1, num2){
  let resultado = num1 + num2;
}

adicionar(3,5);
console.log(resultado); */

/* function dividir(num1, num2){
  let result = num1 / num2;
  return result;
}

function restar(num1, num2){
  let result = num1 - num2;
  return result;
} */

/* const suma = function(num1, num2){ return num1 + num2; };

console.log((suma(4, 5))); */

/* const suma = (x, y) => {return x + y};
const mensaje = nombre => `hola ${nombre}`;

console.log(suma(3, 4));
console.log(mensaje("andres")); */

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;

let precioProducto = 1000;
let descuento = 300;

let resultado = resta(suma(precioProducto, iva(precioProducto)), descuento);

/* resultado = resta(suma(precioProducto, iva(precioProducto)), descuento)
          = resta(suma(precioProducto, iva(1000)), descuento)
          = resta(suma(precioProducto, 1000 * 0.21), descuento)
          = resta(suma(1000, 1000 * 0.21), descuento)
          = resta(1000 + 1000 * 0.21, descuento)
          = resta(1000 + 1000 * 0.21, 300)
          = 1000 + 1000 * 0.21 - 300 */

console.log(resultado);