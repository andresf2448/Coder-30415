/* console.log("Iniciando Proceso");

setTimeout(() => {
  console.log("Proceso Intermedio");
}, 3000);

console.log("Finalizando proceso"); */

/* let boton = document.getElementById("boton");
let saludo = document.getElementById("saludo");

boton.addEventListener("click", () => {
  saludo.classList.add("color");

  setTimeout(() => {
    saludo.classList.remove("color");
  }, 5000);
}); */

/* for(let letra of "hola"){
  setTimeout(() => {
    console.log(letra);
  }, 1000);
}

for(let letra of "mundo"){
  setTimeout(() => {
    console.log(letra);
  }, 1000);
} */

/* console.log("Iniciando Proceso");

setTimeout(() => {
  console.log("Proceso Intermedio");
}, 0);

console.log("Finalizando proceso"); */

/* function multiply (x, y) {    
  return x * y;
}

function printSquare (x) {    
  let s = multiply(x, x);    
  console.log(s);
}

printSquare(5); */

/* setInterval(() => {
  console.log("hola");
}, 1000); */

/* let counter = 0;

const interval = setInterval(() => {
    counter++;
    console.log("Counter: ", counter);

    if (counter >= 5) {
        clearInterval(interval)
        console.log("Se removió el intervalo")
    }
}, 1000); */

/* console.log("Inicio")

const fin = setTimeout(() => {
    console.log("fin")
}, 2000)

clearTimeout(fin); */
/* setTimeout(() => {
  console.log("hola");
}, 3000);

function s(){
  setTimeout(() => {
    console.log("casa");
  }, 4000)
}

s(); */

new Promise((resolve, reject) => {
  //cuerpo promesa
  resolve
})

const eventoFuturo = (value) => {
  return new Promise( (resolve, reject) => {
      //cuerpo de la promesa
      /* if(value){
        resolve([{id: 1}, {id: 2}]);
      }else{
        reject("Promesa rechazada");
      } */
      value ? resolve("Promesa resuelta") : reject("Promesa rechazada");
  } )
}

// eventoFuturo(true).then(response => console.log(response));
// eventoFuturo(false).catch(response => console.log(response));

/* eventoFuturo(true)
.then(response => console.log(response))
.catch(response => console.log(response))
.finally(() => console.log("proceso finalizado")); */

const BD = [
  {id: 1, nombre: 'Producto 1', precio: 1500},
  {id: 2, nombre: 'Producto 2', precio: 2500},
  {id: 3, nombre: 'Producto 3', precio: 3500},
  {id: 4, nombre: 'Producto 4', precio: 3500},
]

const pedirProductos = () => {
  return new Promise( (resolve, reject) => {
      setTimeout(() => {
          resolve(BD)
      }, 3000)
  })
}

pedirProductos()
.then(response => console.log(response))