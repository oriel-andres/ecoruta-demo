// =====================================================================
// EcoRuta Temuco · Semana 9 (tarde) · Asincronía y fetch
// Archivo para CÓDIGO EN VIVO. Los bloques están comentados y se
// descomentan uno a uno, en el orden de la presentación (04).
// Respaldo con todo activo: js/main_resuelto.js
//
// IMPORTANTE: abrir con Live Server (o desde GitHub Pages). Con doble
// clic (file://) la API funciona, pero el JSON de respaldo NO.
// =====================================================================

console.log("main.js cargado ✔");

// La URL de la API (la misma de la cápsula): clima actual de Temuco
const URL_CLIMA = "https://api.open-meteo.com/v1/forecast"
  + "?latitude=-38.74&longitude=-72.60"
  + "&current=temperature_2m,wind_speed_10m,weather_code"
  + "&timezone=America/Santiago";

// Plan B si falla la red de la sala: un archivo con la misma estructura
const URL_RESPALDO = "datos/clima-respaldo.json";

// ---------------------------------------------------------------------
// 0) SÍNCRONO Y ASÍNCRONO: ¿en qué orden aparecen los mensajes?
//    (preguntar a la sala ANTES de ejecutar)
// ---------------------------------------------------------------------
// console.log("1. Antes de pedir");
// fetch(URL_CLIMA).then(() => console.log("2. ¡Llegó!"));
// console.log("3. Después de pedir");
// // Resultado: 1, 3, 2. La página no se queda esperando.

// ---------------------------------------------------------------------
// 1) FETCH CON ASYNC/AWAIT: pedir, convertir, leer
// ---------------------------------------------------------------------
// async function cargarClima() {
//   const respuesta = await fetch(URL_CLIMA);   // pide y espera
//   const datos = await respuesta.json();       // texto JSON → objeto
//   console.log(datos);                         // explorar en la consola
//   console.log(datos.current.temperature_2m);  // leer un dato
// }
// cargarClima();

// ---------------------------------------------------------------------
// 2) ERROR TÍPICO: olvidar await
// ---------------------------------------------------------------------
// async function sinAwait() {
//   const respuesta = fetch(URL_CLIMA);         // ← falta await
//   console.log(respuesta);                     // Promise {<pending>}
// }
// sinAwait();

// ---------------------------------------------------------------------
// 3) MOSTRAR EN EL DOM (seleccionar con lo de la mañana + textContent)
// ---------------------------------------------------------------------
// const estado = document.querySelector("#estado");
// const temperatura = document.querySelector("#temperatura");
// const viento = document.querySelector("#viento");
//
// async function mostrarClima() {
//   const respuesta = await fetch(URL_CLIMA);
//   const datos = await respuesta.json();
//   temperatura.textContent = `${datos.current.temperature_2m} °C`;
//   viento.textContent = `${datos.current.wind_speed_10m} km/h`;
//   estado.textContent = "Clima actualizado.";
// }
// mostrarClima();

// ---------------------------------------------------------------------
// 4) LOS TRES ESTADOS: cargando, listo, error (try/catch + respuesta.ok)
//    Probar el error: DevTools → Network → Offline, y recargar.
// ---------------------------------------------------------------------
// async function mostrarClimaSeguro() {
//   estado.classList.remove("error");
//   estado.textContent = "Cargando clima…";
//   try {
//     const respuesta = await fetch(URL_CLIMA);
//     if (!respuesta.ok) {
//       throw new Error(`La API respondió ${respuesta.status}`);
//     }
//     const datos = await respuesta.json();
//     temperatura.textContent = `${datos.current.temperature_2m} °C`;
//     viento.textContent = `${datos.current.wind_speed_10m} km/h`;
//     estado.textContent = "Clima actualizado.";
//   } catch (error) {
//     console.error(error);
//     estado.classList.add("error");
//     estado.textContent = "No pudimos cargar el clima. Revisa tu conexión e intenta de nuevo.";
//   }
// }
// mostrarClimaSeguro();
// document.querySelector("#btn-actualizar").addEventListener("click", mostrarClimaSeguro);

// ---------------------------------------------------------------------
// 5) LA KATA: un aviso según el clima (condicionales en uso)
//    Agregar dentro del try, después de mostrar los datos:
// ---------------------------------------------------------------------
// const aviso = document.querySelector("#aviso-clima");
// function mostrarAviso(clima) {
//   if (clima.temperature_2m < 8) {
//     aviso.textContent = "Hace frío: lleva abrigo.";
//   } else if (clima.wind_speed_10m > 40) {
//     aviso.textContent = "Viento fuerte: evita los miradores.";
//   } else {
//     aviso.textContent = "Buen momento para salir.";
//   }
//   aviso.hidden = false;
// }

// ---------------------------------------------------------------------
// 6) PLAN B: si la red falla en clase, cambiar URL_CLIMA por URL_RESPALDO
//    en el fetch (requiere Live Server). El código no cambia en nada más:
//    el archivo tiene la misma estructura que la respuesta real.
// ---------------------------------------------------------------------
