// Declaración de variables
const url = "https://rickandmortyapi.com/api/character";

// Captura de elementos del DOM
const spinner = document.getElementById("spinner");

// Eventos
// Búsqueda de que están en tendencia
document.addEventListener("DOMContentLoaded", () => {
  spinner.classList.add("show");
  fetchData();
});

// Fetch de datos por palabra clave
const fetchData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    spinner.classList.remove("show");
    spinner.classList.add("hidden");
    showCharacters(data);
  } catch (error) {
    console.log(error);
  }
};

// Renderizar los gifs en el DOM
const showCharacters = (data) => {
  const container = document.getElementById("container");
  container.innerHTML = "";
  let output = "";
  data.results.forEach(({ name, image, status, species }) => {
    output += `
      <article class="card">
        <div class="image">
          <img src="${image}" alt="">
        </div>
        <h2>${name}</h2>
        <span>${status}</span>
        <p><b>Especie:</b> ${species}</p>
      </article>
    `;
    container.innerHTML = output;
  });
};
