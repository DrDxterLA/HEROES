/* ==================================================
   VARIABLES GLOBALES
================================================== */
let heroes = [];          // Todos los héroes de la API
let filtered = [];        // Héroes filtrados por búsqueda
let currentPage = 1;      // Página actual
let pageSize = 10;        // Cantidad por página

/* ==================================================
   CARGA DE LA API (ASYNC / AWAIT)
================================================== */
async function loadHeroes(){
  const response = await fetch(
    "https://akabab.github.io/superhero-api/api/all.json"
  );

  heroes = await response.json();
  filtered = heroes;

  renderHeroes();
}

/* Ejecutar carga al iniciar */
loadHeroes();

/* ==================================================
   BUSCADOR
================================================== */
searchInput.addEventListener("keyup", e => {

  // Texto ingresado
  const value = e.target.value.toLowerCase();

  // Filtrar por nombre
  filtered = heroes.filter(hero =>
    hero.name.toLowerCase().includes(value)
  );

  // Volver a la primera página
  currentPage = 1;

  renderHeroes();
});

/* ==================================================
   CAMBIO DE CANTIDAD POR PÁGINA
================================================== */
pageSize.addEventListener("change", e => {
  pageSize = parseInt(e.target.value);
  currentPage = 1;
  renderHeroes();
});

/* ==================================================
   PAGINACIÓN
================================================== */
prevBtn.onclick = () => {
  if(currentPage > 1){
    currentPage--;
    renderHeroes();
  }
};

nextBtn.onclick = () => {
  const totalPages = Math.ceil(filtered.length / pageSize);
  if(currentPage < totalPages){
    currentPage++;
    renderHeroes();
  }
};

/* ==================================================
   RENDER DE HÉROES
================================================== */
function renderHeroes(){

  heroesContainer.innerHTML = "";

  // Calcular rango de la página
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  // Renderizar héroes visibles
  filtered.slice(start, end).forEach(hero => {

    heroesContainer.innerHTML += `
      <div class="row mb-4">

        <!-- TARJETA PRINCIPAL -->
        <div class="col-md-6 mb-3">
          <div class="hero-card">
            <img src="${hero.images.lg}" class="w-100 hero-img">
            <div class="p-3">
              <h5 class="text-info text-center">${hero.name}</h5>
              <p class="small">${hero.biography.fullName || ""}</p>
              <p class="small">${hero.work.occupation || ""}</p>
            </div>
          </div>
        </div>

        <!-- TARJETA STATS -->
        <div class="col-md-6 mb-3">
          <div class="stats-card p-3">
            ${renderStats(hero.powerstats)}
          </div>
        </div>

      </div>
    `;
  });

  updatePaginationInfo();
}

/* ==================================================
   INFO DE PÁGINA
================================================== */
function updatePaginationInfo(){
  pageInfo.textContent =
    `Página ${currentPage} de ${Math.ceil(filtered.length / pageSize)}`;
}

/* ==================================================
   RENDER DE STATS (BARRAS)
================================================== */
function renderStats(stats){

  // Convertir stats a HTML
  return Object.entries(stats).map(([key, value]) => `
    <div class="stat-row">
      <div class="d-flex justify-content-between align-items-center">
        <span class="stat-label">${key.toUpperCase()}</span>
        <span class="stat-value">${value}</span>
      </div>
      <div class="stat-bar">
        <div class="stat-fill" style="width:${value}%"></div>
      </div>
    </div>
  `).join("");
}
