/* 
for(desde; hasta; actualizacion){
  codigo a repetir
}
*/

/* for(let i = 5; i < 100; i = i + 2){
  console.log("Hola a todos", i);
} */

/* for(let i = 0; i < 3; i++){
  alert("Hola a todos");
} */

/* let numero = parseInt(prompt("Ingrese un numero"));

for (let index = 1; index <= 10; index++) {
  let result = numero * index;

  alert(numero + " X " + index + " = " + result);
} */

/* for (let index = 0; index < 100; index++) {
  let nombre = prompt("Por favor ingrese su nombre");

  alert(" Turno numero " + index + " Nombre: " + nombre);
} */

/* for(let i = 0; i < 100; i++){
  if(i === 10){
    break;
  }
  console.log(i);
}

console.log("terminamos"); */

/* for(let i = 0; i < 100; i++){
  if(i === 7){
    continue;
  }
  console.log(i);
}

console.log("terminamos"); */

/* 
while(condicion){
  ejecutas el codigo
}
*/

/* 
!!Peligro bucle infinito

let repetir = true;

while(repetir){
  console.log("ay!! sito");
  repetir = false;
} */

let usuario = prompt("Ingrese el usuario");
let intento = 1;

while(usuario != "camila"){
  alert("Usuario incorrecto");

  if(intento === 3){
    break;
  }

  intento = intento + 1; //intento++      intento += 1
  usuario = prompt("Ingrese el usuario");
}

if(intento === 3){
  alert("Estas bloqueado");
}else{
  alert("Genial ingresaste!");
}

/* let repetir = false;

while(repetir){
  console.log("hola");
} */

/* do{
  console.log("hola");
}while(repetir); */

/* let usuario;

do{
  usuario = prompt("Ingrese el usuario");
}while(usuario != "camila") */
/* let edad = 18; */

/* if(edad === 10){
  console.log("no puede entrar a la fiesta");
}else if(edad === 15){
  console.log("puede entrar a la fiesta con adulto");
}else if(edad === 18){
  console.log("puede entrar a la fiesta con un amigo");
}else{
  console.log("puede entrar a la fiesta solo");
} */

/* let edad = 7;

switch(edad){
  case 10:
    console.log("no puede entrar a la fiesta");
    break;
  
  case 15:
    console.log("puede entrar a la fiesta con adulto");
    break;

  case 18:
    console.log("puede entrar a la fiesta con un amigo");
    break;
  
  default:
    console.log("puede entrar a la fiesta solo");
    break;
} */

/* let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("HOLA ANA");
      break;
    case "JUAN":
      alert("HOLA JUAN");
      break;
    default:
      alert("¿QUIÉN SOS?");
      break;
  }
  entrada = prompt("Ingresar un nombre");
}

{
  var nombre = "andres"
}

console.log(nombre); */

let lista = ["ana", "camila", "asdfas", "asdfasdf"];

for (let index = 0; index < 2; index++) {
  while(disponibilidad != "disponible"){
    console.log("espere");
  }
  
}