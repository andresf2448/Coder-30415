/* let alquileres = [
  { nombre: "cabaña de verano", precio: 2000, cantidadPersonas: 20 },
  { nombre: "casa de verano", precio: 500, cantidadPersonas: 3 },
  { nombre: "apartamento lujo", precio: 1020, cantidadPersonas: 17 },
  { nombre: "apartamento", precio: 1500, cantidadPersonas: 17 },
  { nombre: "cabaña de verano día y noche", precio: 1000, cantidadPersonas: 5 },
];

let asignaFiltro = prompt(
  "Ingresa el filtro que quieres (nombre, precio, cantidad de personas)"
);

if (asignaFiltro === "cantidad de personas") {
  let filtro = parseInt(prompt("Ingrese la cantidad de personas"));

  let resultados = alquileres.filter(
    (elemento) => elemento.cantidadPersonas === filtro
  );
  console.log(resultados);
} else if (asignaFiltro === "nombre") {
  let filtro = prompt("Ingrese el nombre");

  let resultados = alquileres.filter((elemento) =>
    elemento.nombre.includes(filtro)
  );
  console.log(resultados);
} else if (asignaFiltro === "precio") {
  let filtro = parseInt(prompt("Ingrese el menor precio"));

  let resultados = alquileres.filter((elemento) => elemento.precio > filtro);
  console.log(resultados);
} */

/* 
//filtro por cantidad de personas
let filtro = parseInt(prompt("Ingrese la cantidad de personas"));

let resultados = alquileres.filter(elemento => elemento.cantidadPersonas === filtro);
console.log(resultados);
*/
/* 
//filtro por nombre
let filtro = prompt("Ingrese el nombre");

let resultados = alquileres.filter(elemento => elemento.nombre.includes(filtro));
console.log(resultados); */

/*
//filtro por precio
let filtro = parseInt(prompt("Ingrese el menor precio"));

let resultados = alquileres.filter(elemento => elemento.precio > filtro);
console.log(resultados); */

let videoJuegos = [
  { nombre: "Araña", precio: 2000, categoria: "otro" },
  { nombre: "Carros", precio: 500, categoria: "deportes" },
  { nombre: "Motos", precio: 1020, categoria: "deportes" },
  { nombre: "Espanto la niña", precio: 1500, categoria: "terror" },
  { nombre: "Terror el muchacho", precio: 1000, categoria: "terror" },
];

let categoria = prompt("ingresa la categoria");

let filtradoCategoria = videoJuegos.filter(elemento => elemento.categoria === categoria);

let nombre = prompt("Ingrese el nombre");
let filtradoNombre = filtradoCategoria.filter(elemento => elemento.nombre.includes(nombre));
console.log(filtradoNombre);