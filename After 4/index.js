let container = document.getElementById("container");

const getCharacters = async () => {
  let res = await axios("https://rickandmortyapi.com/api/character");
  let data = res.data.results;

  // const filter = prompt("Ingrese el status del personaje");
  // const filters = data.filter(el => el.status === filter);

  data.forEach(element => {
    const item = document.createElement("div");

    item.innerHTML = `
      <h1>${element.name}</h1>
      <p>${element.status}</p>
      <p>${element.gender}</p>
      <img src="${element.image}">
      <hr/>
    `;

    container.append(item);
  });
}

getCharacters();