/* let nombre = "andres";
let edad = 50;
let direccion = "AV siempre"; */

/* const persona = {
  nombre: "andres",
  edad: 50,
  direccion: "AV siempre"
}; */

/* console.log(persona.edad);
console.log(persona.nombre);
console.log(persona.direccion);
console.log(persona["nombre"]);
console.log(persona["edad"]);
console.log(persona["direccion"]); */

/* persona.apellido = "Ramirez";
persona["padre"] = "Nicolas";
console.log(persona); */

/* function Persona(nombre, apellido, direccion){
  this.nombre = nombre;
  this.apellido = apellido;
  this.direccion = direccion;
}

const persona1 = new Persona("andres", "velasquez", "AV siempre");
const persona2 = new Persona("andres2", "velasquez2", "AV siempre");

console.log(persona2.nombre); */

/* function Perrito(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

const perrito1 = new Perrito("firu", 3);
const perrito2 = new Perrito("maxi", 5);

console.log(perrito2.nombre); */

/* function Alumno(nombre, edad, acudiente){
  this.nombre = nombre;
  this.edad = edad;
  this.acudiente = acudiente;
};

const alumno1 = new Alumno("pepito", 13, "maria");
console.log(Alumno); */

/* function Alumno(objeto){
  this.nombre = objeto.nombre;
  this.edad = objeto.edad;
  this.acudiente = objeto.acudiente;
};

const pepito = new Alumno({edad: 13, acudiente: "maria", nombre: "federico"});
const hola = new Alumno({edad: 15, acudiente: "camila", nombre: "andres"});
console.log(alumno1);
console.log(alumno2);

function Producto(nombre, imagen, favorito, precio){
  this.nombre = nombre;
  this.image = imagen;
  this.favorito = favorito;
  this.precio = precio;
}

const producto1 = new Producto("monitor led para juegos ...", "hsdrf", false, 1395900);
const producto2 = new Producto("adaptador ...", "asdfasdf", true, 22900); */
/* function Alumno(nombre, edad, acudiente) {
  this.nombre = nombre;
  this.edad = edad;
  this.acudiente = acudiente;
}

let array = [];

for (let index = 0; index < 100; index++) {
  let nombre = prompt("ingrese el nombre");
  let edad = prompt("edad");
  let acudiente = prompt("acudiente");

  const alumno1 = new Alumno(nombre, edad, acudiente);
  array.push(alumno1)
}

console.log(array);
 */

/* function Perrito(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.hablar = function(){console.log("estoy ladrando")}
}

const perrito1 = new Perrito("firu", 3);
const perrito2 = new Perrito("maxi", 5); */

/* const persona = {
  nombre: "andres",
  edad: 34
}

for(const propiedad in persona){
  console.log(persona[propiedad]);
} */

class Persona{
  constructor(nombre, edad, hablando){
    this.nombre = nombre;
    this.edad = edad;
    this.hablando = hablando;
  }

  hablar(){
    this.hablando = true;
  }
}

const persona1 = new Persona("andres", 14, false);
console.log(persona1);

persona1.hablar()
console.log(persona1);