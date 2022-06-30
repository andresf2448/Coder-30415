/* let div = document.getElementById("container");
console.log(div.innerHTML);
console.log(div.innerText); */

/* let parrafo = document.getElementById("parrafo");
console.log(parrafo);
console.log(parrafo.innerHTML);
console.log(parrafo.innerText); */

/* let perritos = document.getElementsByClassName("perritos");
console.log(perritos[0].innerHTML);
console.log(perritos[1].innerHTML);
console.log(perritos[2].innerHTML); */

/* let containers = document.getElementsByTagName("div");
console.log(containers[0]);
console.log(containers[1]);
console.log(containers[2]); */

/* let perritos = document.getElementsByClassName("perritos");

for(const perrito of perritos){
  console.log(perrito.innerHTML);
} */

/* let saludo = document.getElementById("container"); */
/* let seccion = prompt("A dónde quieres ir?");

if(seccion === "carrito"){
  saludo.innerHTML = "Bienvenido al carrito de compras";
}

if(seccion === "favoritos"){
  saludo.innerHTML = "Bienvenido a los favoritos";
} */

/* let saludo = document.getElementById("container");
let color = prompt("Ingrese el color que quiere");

if(color === "azul"){
  saludo.className = "azul";
}

if(color === "amarillo"){
  saludo.className = "amarillo";
} */
/* 
pasos para crear un elemento
1. creación de la etiqueta
2. asignación de contenido
3. decir quien es su padre o lugar donde se va a visualizar
*/
/* let padre = document.getElementById("container");

let parrafo = document.createElement("p");
parrafo.innerHTML = "<h2>Hola a todos</h2>";

padre.append(parrafo); */

/* let container = document.getElementById("container");
container.remove(); */

/* let container = document.getElementById("container");
let personas = ["Camila", "Agostina", "Javier", "Marilyn"];

for(const persona of personas){
  let li = document.createElement("li");
  li.innerHTML = persona;
  container.append(li);
} */

/* let productos = [
  {id: 1, nombre: "camisa", precio: 1001, img: "asdfasdfasdfasdf"},
  {id: 2, nombre: "zapato", precio: 1020, img: "asdfasdfasdfasdf"},
  {id: 3, nombre: "media", precio: 1500, img: "asdfasdfasdfasdf"},
  {id: 4, nombre: "gorra", precio: 2000, img: "asdfasdfasdfasdf"},
  {id: 5, nombre: "pantalon", precio: 2500, img: "asdfasdfasdfasdf"}
];

let container = document.getElementById("container");

for(const producto of productos){
  let item = document.createElement("div");
  item.innerHTML = `<h2>Id: ${producto.id}</h2>
                    <p>Producto: ${producto.nombre}</p>
                    <b>Precio: ${producto.precio}</b>
                    <img src=${producto.img}>`;

  container.append(item);
} */

/* let contenedor = document.querySelectorAll(".texto");
console.log(contenedor); */

let productos = [
  {id: 1, nombre: "camisa", precio: 1001},
  {id: 2, nombre: "zapato", precio: 1020},
  {id: 3, nombre: "media", precio: 1500},
  {id: 4, nombre: "gorra", precio: 2000},
  {id: 5, nombre: "pantalon", precio: 2500}
];

let container = document.getElementById("container");
let filtro = parseInt(prompt("ingrese el precio mínimo"));

let filtrados = productos.filter(elemento => elemento.precio > filtro);

for(const producto of filtrados){
  let item = document.createElement("div");
  item.innerHTML = `<h2>Id: ${producto.id}</h2>
                    <p>Producto: ${producto.nombre}</p>
                    <b>Precio: ${producto.precio}</b>`;

  container.append(item);
}