/* let nombre = "andres";
let edad = 5;
let verdad = true;
let falso = false;

console.log(verdad);
console.log(falso); */


/* //Estructura del condicional if

if(condicion){
  //codigo a realizar cuando la condicion es verdadera
} */

/* 
  = asignacion
  == si un valor es igual a otro sin mirar el tipo de dato
  === si un valor es igual a otro incluso en su tipo como en su valor
*/

/* if(true){
  console.log("la condicion es verdadera");
} */

/* if(false){
  console.log("Hola a todos");
} */

/* let edad = 14;

if(edad === 25){
  console.log("tienes 25");
} */
/* let arreglo = [];

if(arreglo){
  console.log("entramos");
} */

/* let edad = 14;

if(edad === 25){
  console.log("tienes 25");
}else{
  console.log("no tienes 25");
} */

/* let respuesta = prompt("terminaste la tarea");

if(respuesta.toUpperCase() === "SI"){
  alert("Puedes salir a jugar");
}else{
  alert("No puede salir a jugar");
} */

/* let edad = 71;

if(edad < 20){
  console.log("la edad es menor a 20");
}else if(edad < 40){
  console.log("edad es menor a 40");
}else if(edad <= 70){
  console.log("edad es menor a 70");
}else{
  console.log("edad es mayor a 70");
}

console.log("salimos"); */
/* let numero = 7;

let esMayor10 = (numero > 10);

if(esMayor10){
  console.log("es mayor");
}else{
  console.log("no es mayor");
}

numero = 30;
console.log(numero); */

/* let edad = 77;

if(edad < 20){
    console.log("La edad es menor a 20");
}else if(edad < 40){
    console.log("Edad es menor a 40");
}else if(edad < 70){
    console.log("Edad es menor que 70");
}else{
    console.log("La edad es mayor o igual a 70");
}
console.log("salimos"); */
//&& es verdadero cuando todas las condiciones son verdaderas
//|| es verdadero cuando al menos una de las condiciones es verdadera
/* console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false); */

/* let nombre = prompt("ingrese su nombre");
let edad = prompt("Ingrese su edad");

if((nombre !== "") && (edad !== "")){
  alert("datos correctos")
}else{
  alert("Datos incorrectos");
} */

/* let respuesta = prompt("terminaste la tarea");

if(respuesta === "SI" || respuesta === "si"){
  alert("Puedes salir a jugar");
}else{
  alert("No puede salir a jugar");
} */

/* let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
    alert("Hola Ema"); 
}else{
    alert("Error: Ingresar nombre valido");
} */

/* let nombre = "andres";
let edad = 5;

console.log(`Hola ${nombre}, tu edad es ${edad}`); */

/* 
el parseInt transforma un string en un entero, siempre y cuando el string sea potencialmente un número
*/

/* let edad = parseInt(prompt("Ingrese la edad")); */

/* let numero = prompt("ingrese el numero");

if(Number.isInteger(numero)){
  alert("datos correctos")
}else{
  alert("no ingresaste un numero")
} */

let nombre = prompt('Ingrese su nombre').toLocaleLowerCase();
let apellido = prompt('Ingrese su apellido').toLocaleLowerCase();
let edad = parseInt(prompt('Ingrese su edad'));

if(Number.isInteger(edad)){
    alert('ingrese un numero')
};

if( nombre != '' && apellido != ''){
    alert(`Hola ${nombre} ${apellido} tu tienes ${edad} años`)
} else{
    alert('Ingrese Datos Validos')
};
