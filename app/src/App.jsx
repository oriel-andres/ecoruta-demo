import Encabezado from "./components/Encabezado.jsx";
import ListaRutas from "./components/ListaRutas.jsx";
import PiePagina from "./components/PiePagina.jsx";
import { rutas } from "./datos/rutas.js";

function App() {
  return (
    <>
      <Encabezado
        enlaces={["Inicio", "Rutas", "Contacto"]}
        paginaActual="Inicio"
      />
      <main>
        <ListaRutas rutas={rutas} />
      </main>
      <PiePagina />
    </>
  );
}

export default App;