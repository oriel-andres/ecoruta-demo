import TarjetaRuta from "./TarjetaRuta.jsx";

export default function ListaRutas({ rutas }) {
  return (
    <section className="lista-rutas">
      <h2>Rutas destacadas</h2>
      {rutas.map((ruta) => (
        <TarjetaRuta
          key={ruta.id}
          nombre={ruta.nombre}
          imagen={ruta.imagen}
          alt={ruta.alt}
          distanciaKm={ruta.distanciaKm}
          dificultad={ruta.dificultad}
        />
      ))}
    </section>
  );
}