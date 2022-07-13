/* 
localStorage //objeto global
sessionStorage  //objeto global
setitem //guardar en localStorage o sessionStorage
getItem // traer info del localStorage
JSON.stringify //transforma a formato json
JSON.parse // transforma al formato javascript
*/
const cambiarPrecio = (nombre, precio) => {
  let productos = JSON.parse(localStorage.getItem("productos"));

  let producto = productos.find(elemento => elemento.nombre === nombre);
  producto.precio = precio;

  localStorage.setItem("productos", JSON.stringify(productos));
}

/* let productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 1100 },
  { id: 3, nombre: "gorra", precio: 700 },
];

localStorage.setItem("productos", JSON.stringify(productos)); */
let nombre = prompt("ingrese el nombre del producto");
let precio = parseInt(prompt("ingrese el precio del producto"));
cambiarPrecio(nombre, precio);