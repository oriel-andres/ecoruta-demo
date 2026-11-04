export default function Encabezado({ enlaces, paginaActual }) {
  return (
    <header>
      <h1>EcoRuta Temuco</h1>
      <nav>
        {enlaces.map((enlace) => (
          <a
            key={enlace}
            href="#"
            className={enlace === paginaActual ? "activo" : ""}
          >
            {enlace}
          </a>
        ))}
      </nav>
    </header>
  );
}