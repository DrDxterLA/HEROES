🦸 Superheroes Explorer

Aplicación web desarrollada con Bootstrap 5, DataTables, Chart.js y JavaScript moderno (ES6+) que consume una API pública de superhéroes y permite explorar su información mediante tabla dinámica, tarjetas visuales y gráfico Polar Area.

📌 1. Descripción General del Proyecto

Este proyecto corresponde al desarrollo de una aplicación web frontend que consume datos desde una API pública utilizando programación asíncrona con async/await.

La aplicación permite visualizar más de 500 superhéroes en una tabla interactiva con paginación, búsqueda dinámica y renderizado de información detallada mediante tarjetas Bootstrap y gráficos estadísticos.

API utilizada:
https://akabab.github.io/superhero-api/api/all.json

🎯 2. Objetivos Académicos

✔ Aplicar consumo de API con Fetch y async/await
✔ Implementar paginación dinámica con DataTables
✔ Utilizar Bootstrap para diseño responsive
✔ Renderizar información dinámica en el DOM
✔ Graficar datos usando Chart.js (Polar Area Chart)
✔ Aplicar buenas prácticas en organización de código

🛠 3. Tecnologías Utilizadas

HTML5

CSS3

Bootstrap 5

jQuery

DataTables

Chart.js

JavaScript ES6+

Fetch API

⚙ 4. Funcionamiento Técnico
4.1 Carga Inicial

Al cargar la página:

Se ejecuta una función asíncrona.

Se realiza la petición a la API.

Se almacenan todos los héroes en memoria.

Se construye dinámicamente la DataTable.

4.2 Tabla Interactiva

La tabla incluye:

Paginación automática.

Buscador en tiempo real.

Selector de cantidad de registros.

Opción “Mostrar todos”.

Integración visual con Bootstrap.

4.3 Renderizado de Tarjetas

Al hacer clic en un héroe:

Se genera una tarjeta principal con imagen en tamaño LG.

Se muestra información de:

Biografía

Apariencia

Trabajo

4.4 PowerStats Destacados

Se genera una tarjeta independiente que contiene:

Estadísticas numéricas destacadas.

Gráfico Polar Area dinámico.

Actualización automática al cambiar de héroe.

Control de instancia para evitar duplicación del gráfico.

🧠 5. Conceptos Aplicados

Programación orientada a eventos

Programación asíncrona

Manipulación dinámica del DOM

Consumo de API REST

Visualización de datos

Separación de responsabilidades

Componentización con Bootstrap

📊 6. Flujo Lógico del Sistema

Obtener datos desde la API.

Procesar respuesta JSON.

Construir dinámicamente la tabla.

Detectar evento click en fila.

Renderizar tarjetas con información del héroe.

Generar gráfico Polar Area con PowerStats.

Destruir gráfico anterior antes de crear uno nuevo.

🖥 7. Instrucciones de Ejecución

Descargar o clonar el repositorio.

Abrir el archivo index.html en un navegador moderno.

No requiere servidor backend ni instalación adicional.