import TarjetaRuta from "./components/TarjetaRuta.jsx";
import nielol from "./assets/nielol.jpg";

function App() {
  return (
    <main>
      <h1>EcoRuta Temuco</h1>
      <TarjetaRuta nombre="Cerro Ñielol" distanciaKm={4} dificultad="baja" imagen={nielol} alt="Sendero del Cerro Ñielol" />
      <TarjetaRuta nombre="Laguna Captrén" distanciaKm={2} dificultad="baja" imagen={nielol} alt="Laguna Captrén" />
      <TarjetaRuta nombre="Sierra Nevada" distanciaKm={7} dificultad="alta" imagen={nielol} alt="Sierra Nevada" />
    </main>
  );
}

export default App;