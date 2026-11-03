import TarjetaRuta from "./components/TarjetaRuta.jsx";
import Encabezado from "./components/Encabezado.jsx";
import PiePagina from "./components/PiePagina.jsx";
import nielol from "./assets/nielol.jpg";

function App() {
  return (
    <>
      <Encabezado />
      <main>
        <TarjetaRuta nombre="Cerro Ñielol" distanciaKm={4} dificultad="baja" imagen={nielol} alt="Sendero del Cerro Ñielol" />
        <TarjetaRuta nombre="Laguna Captrén" distanciaKm={2} dificultad="baja" imagen={nielol} alt="Laguna Captrén" />
        <TarjetaRuta nombre="Sierra Nevada" distanciaKm={7} dificultad="alta" imagen={nielol} alt="Sierra Nevada" />
      </main>
      <PiePagina />
    </>
  );
}

export default App;