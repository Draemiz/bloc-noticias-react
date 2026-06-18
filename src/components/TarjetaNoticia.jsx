function TarjetaNoticia({ info }) {
  return (
    <article className="card">

      <div className="tag">
        Autor #{info.userId}
      </div>

      <h2>{info.title}</h2>

      <p>{info.body}</p>

      <button>
        Leer artículo
      </button>

    </article>
  );
}

export default TarjetaNoticia;