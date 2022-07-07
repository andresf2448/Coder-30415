/* localStorage.setItem("numero", "20");
localStorage.setItem("nombre", "andres");
localStorage.setItem("edad", "50");
localStorage.setItem("direccion", "AV"); */

/* for(let i = 0; i < localStorage.length; i++){
  let key = localStorage.key(i);

  console.log("key", key);
  console.log("valor: " + localStorage.getItem(key));
} */

/* localStorage.removeItem("direccion"); */
/* localStorage.clear(); */

/* let nombre = prompt("ingrese su nombre");
localStorage.setItem("nombre", nombre); */

/* const persona = {nombre: "andres", direccion: "AV"};
localStorage.setItem("persona", JSON.stringify(persona)); */

/* let persona = JSON.parse(localStorage.getItem("persona"));
console.log(persona); */

/* localStorage.apellido = "ruiz"; */

/* const productos = [
  { id: 1, nombre: "monitor", precio: 1100 },
  { id: 2, nombre: "camisa", precio: 1200 },
  { id: 3, nombre: "mouse", precio: 1500 },
  { id: 4, nombre: "computador", precio: 1700 },
  { id: 5, nombre: "zapatos", precio: 2000 },
  { id: 6, nombre: "gorra", precio: 3000 },
];

const guardarStorage = (clave, valor) => {localStorage.setItem(clave, valor)};

for(const producto of productos){
  guardarStorage(producto.id, JSON.stringify(producto))
}

localStorage.setItem("carrito", JSON.stringify(productos)); */

let usuario;
let usuarioStorage = localStorage.getItem("usuario");

if(usuarioStorage){
  usuario = usuarioStorage;
  alert("Bienvenido " + usuario);
}else{
  usuario = prompt("Ingresa tu nombre");
  localStorage.setItem("usuario", usuario);
}