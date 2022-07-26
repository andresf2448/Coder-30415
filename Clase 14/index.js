// fetch(url, config)
/* const lista = document.getElementById("lista");

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
  posts.forEach(post => {
    const li = document.createElement('li');
    li.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;

    lista.append(li);
  });
}); */

/* fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "prueba",
    body: "probando fetch",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
}).then(response => response.json())
.then(data => console.log(data)); */

/* const lista = document.getElementById("lista");

fetch("./data.json")
.then(resp => resp.json())
.then(productos => {
  productos.forEach(producto => {
    const li = document.createElement('li');
    li.innerHTML = `
          <h2>${producto.nombre}</h2>
          <p>${producto.precio}</p>
          <p>codigo: ${producto.id}</p>
          <hr/>
    `;

    lista.append(li);
  });
}).catch(error => console.log(error)); */
const lista = document.getElementById("lista");

const traerDatos = async () => {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();

    data.forEach((post) => {
      const li = document.createElement("li");
      li.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
      `;

      lista.append(li);
    });
  } catch (error) {
    const mensaje = document.createElement("div");
    mensaje.innerHTML = `Error al cargar la información ${error}`;
    document.body.append(mensaje);
  }
};

traerDatos();