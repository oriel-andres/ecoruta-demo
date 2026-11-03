export default function TarjetaRuta({ nombre, distanciaKm, dificultad, imagen, alt }) {
  return (
    <article className="tarjeta">
      <img src={imagen} alt={alt} />
      <h2>{nombre}</h2>
      <p>{distanciaKm} km · dificultad {dificultad}</p>
    </article>
  );
}