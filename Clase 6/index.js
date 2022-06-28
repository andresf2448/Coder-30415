/* const arr1 = [];
const arr2 = [1, 2, 20, 50];
const arr3 = ["Camila", "Ana", "Jero"];
const diferentes = [1, "camila", true];
console.log(diferentes[1]);
console.log(diferentes[2]);
console.log(arr2[3]); */

/* let result = arr2[1] + arr2[3];
console.log(result); */
/* const arr2 = [1, 2, 20, 50];

for (let index = 0; index < arr2.length; index++) {
  alert(arr2[index]);
} */

/* const arr3 = ["Camila", "Ana", "Jero"];
arr3.push("Sofia"); //agrega al final
console.log(arr3);
arr3.unshift("Mariana");//agregar al principio
console.log(arr3); */

/* 
const arr3 = ["Camila", "Ana", "Jero"];
arr3.pop(); //saca el ultimo
console.log(arr3);
arr3.shift(); //saca del principio
console.log(arr3); */

/* const arr3 = ["Camila", "Ana", "Jero", "Tomas", "Milton"];
arr3.splice(1, 3); //elimina desde una posicion y una cantidad dada
console.log(arr3); */

/* const arr3 = ["Camila", "Ana", "Jero", "Tomas", "Milton"];
console.log(arr3.join("-"));//une los elementos del arreglo y en el medio coloca lo que pasmos de parametro
console.log(arr3); */

/* const arr3 = ["Camila", "Ana", "Jero", "Tomas", "Milton"];
const arr4 = [3, 2];

console.log(arr3.concat(arr4)); //concatena o une arreglos */

/* const arr3 = ["Camila", "Ana", "Jero", "Tomas", "Milton"];
let recorte = arr3.slice(1, 4); //hace copia de un arreglo en las posiciones indicadas. Recordar que llega hasta un indice menos del pasado por parametro
console.log(recorte); */

/* const arr3 = ["Camila", "Ana", "Jero", "Tomas", "Milton"];
console.log(arr3.indexOf("Ana"));// busca la posicion del elemento pedido, si este no existe retorna -1
console.log(arr3.indexOf("Anaaaaaaaaa")); */

/* const arr3 = ["Camila", "Ana", "Jero", "Tomas", "Milton"];
console.log(arr3.includes("Camilo"));// Me dice si un elemento está o no en un arreglo
console.log(arr3.includes("Camila")); */

/* const arr3 = ["Camila", "Ana", "Jero", "Tomas", "Milton"];
arr3.reverse();// intercambia el orden
console.log(arr3); */

/* let numeros = [1,2,3];
let numeros1 = [1,2,3];

console.log(numeros + numeros1); */

/* let numeros = [7,2,3];

let num1 = numeros[0];//7
numeros[0] = numeros[2];//[3,2,3]
numeros[2] = num1;

console.log(numeros); */

/* const arr3 = ["Camila", "Ana", "Jero", "Tomas", "Milton"];
let result = arr3.reverse();// intercambia el orden
console.log(result); */

/* const arr3 = ["Camila", "Ana", "Jero", "Tomas", "Milton"];
let nuevo = arr3.slice(1, 3);

console.log(arr3);
console.log(nuevo); */

/* const months = ["Jan", "Feb", "March", "April", "June"];
months.splice(2, 1, 'May');
console.log(months); */

/* const months = ["Jan", "Feb", "March", "April", "June"];
months.splice(1,3,"may","may", "may")
console.log(months); */


/* const productos = ["Papa", "Arroz", "Pan"];

const eliminar = (nombre) => {
  let index = productos.indexOf(nombre);

  if(index != -1){
    productos.splice(index, 1);
  }

  console.log(productos);
}

eliminar("Pan"); */

/* const productos = [
  {id: 1, nombre: "Pan"},
  {id: 2, nombre: "Papa"},
  {id: 3, nombre: "Arroz"}
];

for(const producto of productos){
  console.log(producto.id);
  console.log(producto.nombre);
} */

class Producto{
  constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
  }
}

const productos = [];
productos.push(new Producto("Arroz", 1000));
productos.push(new Producto("Pan", 2000));
productos.push(new Producto("Papa", 1500));

for(const producto of productos){
  console.log(producto);
}

console.log(productos);
console.table(productos);