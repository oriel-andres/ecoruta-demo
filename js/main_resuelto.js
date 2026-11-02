// Versión con todo activo (respaldo del docente).
// Para usarla, cambia en index.html: js/main.js → js/main_resuelto.js
console.log("main_resuelto.js cargado ✔");

const URL_CLIMA = "https://api.open-meteo.com/v1/forecast"
  + "?latitude=-38.74&longitude=-72.60"
  + "&current=temperature_2m,wind_speed_10m,weather_code"
  + "&timezone=America/Santiago";
const URL_RESPALDO = "datos/clima-respaldo.json";

// Cambiar a true si la red de la sala no deja llegar a la API (usar Live Server)
const USAR_RESPALDO = false;

// 1. Seleccionar
const estado = document.querySelector("#estado");
const temperatura = document.querySelector("#temperatura");
const viento = document.querySelector("#viento");
const cielo = document.querySelector("#cielo");
const aviso = document.querySelector("#aviso-clima");
const btnActualizar = document.querySelector("#btn-actualizar");

// Traduce el código de tiempo WMO (weather_code) a texto
function describirCielo(codigo) {
  if (codigo === 0) return "Despejado";
  if (codigo <= 3) return "Parcialmente nublado";
  if (codigo === 45 || codigo === 48) return "Niebla";
  if (codigo >= 51 && codigo <= 57) return "Llovizna";
  if (codigo >= 61 && codigo <= 67) return "Lluvia";
  if (codigo >= 71 && codigo <= 77) return "Nieve";
  if (codigo >= 80 && codigo <= 82) return "Chubascos";
  if (codigo >= 95) return "Tormenta";
  return "Sin información";
}

// La kata: aviso según las condiciones
function mostrarAviso(clima) {
  if (clima.temperature_2m < 8) {
    aviso.textContent = "Hace frío: lleva abrigo.";
  } else if (clima.wind_speed_10m > 40) {
    aviso.textContent = "Viento fuerte: evita los miradores.";
  } else if (clima.weather_code >= 61) {
    aviso.textContent = "Se esperan precipitaciones: lleva impermeable.";
  } else {
    aviso.textContent = "Buen momento para salir.";
  }
  aviso.hidden = false;
}

// 2. Pedir, convertir y mostrar, con los tres estados
async function mostrarClima() {
  estado.classList.remove("error");
  estado.textContent = "Cargando clima…";
  btnActualizar.disabled = true;
  try {
    const respuesta = await fetch(USAR_RESPALDO ? URL_RESPALDO : URL_CLIMA);
    if (!respuesta.ok) {
      throw new Error(`La API respondió ${respuesta.status}`);
    }
    const datos = await respuesta.json();
    const clima = datos.current;
    temperatura.textContent = `${clima.temperature_2m} °C`;
    viento.textContent = `${clima.wind_speed_10m} km/h`;
    cielo.textContent = describirCielo(clima.weather_code);
    mostrarAviso(clima);
    estado.textContent = `Actualizado: ${clima.time.replace("T", " ")}`;
  } catch (error) {
    console.error(error);
    estado.classList.add("error");
    estado.textContent = "No pudimos cargar el clima. Revisa tu conexión e intenta de nuevo.";
  } finally {
    btnActualizar.disabled = false;
  }
}

// 3. Escuchar
btnActualizar.addEventListener("click", mostrarClima);
mostrarClima();
