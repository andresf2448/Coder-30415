/* let boton = document.getElementById("btnPrincipal");
let saludo = document.getElementById("saludo");

boton.addEventListener("mousedown", () => {
  saludo.className = "azul";
});
boton.addEventListener("mouseup", () => {
  saludo.className = "amarillo";
}); */
/* boton.addEventListener("mouseover", () => console.log("mouseover")); */
/* boton.addEventListener("mouseout", () => console.log("mouseout")); */
/* boton.addEventListener("mousemove", () => console.log("mousemove")); */
/* boton.addEventListener("click", () => {
  saludo.className = "verde";
}); */

/* let input = document.getElementById("nombre");
let saludo = document.getElementById("saludo"); */
/* input.addEventListener("keydown", () => console.log("keydown")) */
/* input.addEventListener("keyup", () => console.log("keyup")) */
/* input.addEventListener("change", () => console.log("change")) */
/* input.addEventListener("input", () => {
  if(input.value.length === 5){
    saludo.className = "verde";
  }else{
    saludo.className = "amarillo";
  }
}) */

/* input.addEventListener("input", () => {
  if(input.value.includes("@")){
    saludo.className = "verde";
  }else{
    saludo.className = "rojo";
  }
}) */

/* let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validacion);

function validacion(e){
  e.preventDefault();

  let form = e.target;
  let input1 = form.children[0].value;
  let input2 = form.children[1].value;

  console.log(input1, input2);
} */

/* let input = document.getElementById("nombre");
let saludo = document.getElementById("saludo");

input.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    saludo.className = "verde";
  }

  if(e.key === "a"){
    saludo.className = "amarillo";
  }

  if(e.key === "b"){
    saludo.className = "azul";
  }
}) */

let saludos = document.getElementsByClassName("hola");
console.log(saludos);