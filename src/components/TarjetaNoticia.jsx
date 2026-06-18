function TarjetaNoticia({ info }) {
  return (
    <div className="card">
      <span>Autor #{info.userId}</span>

      <h3>{info.title}</h3>

      <p>{info.body}</p>

      <button>Leer más</button>
    </div>
  );
}

export default TarjetaNoticia;