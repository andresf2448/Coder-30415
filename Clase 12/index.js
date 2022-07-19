let btn = document.getElementById("boton");
//-------------------------------------------------------sweetAlert-----------------------------------
/* btn.addEventListener("click", () => {
  Swal.fire({
    title: "Genial!",
    text: "Haz clickeado el botón!",
    icon: "success",
    confirmButtonText: "Cool",
  });
}); */

/* btn.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "Error inesperado",
    icon: "error",
    confirmButtonText: " =( ",
  });
}); */

/* btn.addEventListener("click", () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Agregaste a carrito",
    showConfirmButton: false,
    timer: 5000,
  });
}); */

/* btn.addEventListener("click", () => {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}); */

/* btn.addEventListener("click", () => {
  Swal.fire({
    title: "Está seguro de agregar al carrito?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, seguro",
    cancelButtonText: "No, no quiero",
  }).then((result) => {
    if (result.isConfirmed) {
      // let carrito = JSON.parse(localStorage.getItem("carrito"))
      // carrito.push(producto);
      // localStorage.setItem("carrito", JSON.stringify(carrito));

      Swal.fire({
        title: "Guardado!",
        icon: "success",
        text: "El producto se guardo",
      });
    }
  });
}); */

/* let producto = {
  nombre: "",
  precio: 1234,
  img: "https://unsplash.it/400/200"
}

btn.addEventListener("click", () => {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: producto.img,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}); */

/* btn.addEventListener("click", () => {
  Swal.fire({
    title: 'filtrar',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: result.value
      })
    }
  })
}); */

//----------------------------------------------Toastify----------------------------------------------------
/* btn.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 1000,
  }).showToast();
});
 */

/* btn.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 1000,
    style: {
      background: "linear-gradient(to left, #00b09b, #96c92d)",
    },
  }).showToast();
}) */

/* btn.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    className: "notificacion",
  }).showToast();
}); */

/* btn.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    onClick: () => {
      Toastify({
        text: "Clickeaste un Toast!",
        duration: 1500,
      }).showToast();
    },
  }).showToast();
}); */

/* btn.addEventListener("click", () => {
  Toastify({
    text: "",
    duration: 3000,
    destination: "https://www.coderhouse.com",
  }).showToast();
}); */

//------------------------------------------------Luxon----------------------------------------------------
// const DateTime = luxon.DateTime;

/* const dt = DateTime.local(2022, 7, 18, 12, 8);
console.log(dt.c.year); */

/* const now = DateTime.now();
console.log(now.toString()); */

// const dt = DateTime.now();
/* console.log(dt.year);
console.log(dt.month);
console.log(dt.day);
console.log(dt.second);
console.log(dt.weekday); */
/* console.log(dt.zoneName);
console.log(dt.daysInMonth); */
/* console.log(dt.toLocaleString());
console.log(dt.toLocaleString(DateTime.DATE_FULL));
console.log(dt.toLocaleString(DateTime.TIME_SIMPLE));
console.log(dt.setLocale("es").toLocaleString(DateTime.DATE_FULL));
console.log(dt.setLocale("en").toLocaleString(DateTime.DATE_FULL)); */

/* console.log( dt.toLocaleString(DateTime.DATETIME_SHORT) )

const suma = dt.plus({ hours: 5, minutes: 15 })
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))

const resta = dt.minus({ month: 2, days: 10 })
console.log(resta.toLocaleString(DateTime.DATETIME_SHORT)) */

const DateTime = luxon.DateTime;
const Interval = luxon.Interval;

const now = DateTime.now();
const later = DateTime.local(2022, 11, 25);

const i = Interval.fromDateTimes(now, later);

console.log(i.length('days'));
console.log(i.length('hours'));
console.log(i.length('minutes'));