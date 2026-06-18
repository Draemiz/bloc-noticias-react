function Header() {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <span className="logo-mark">✦</span>

          <div>
            <h1>Bloom News</h1>
            <p>Historias que inspiran</p>
          </div>
        </div>
      </header>

      <section className="hero">

        <div className="hero-text">

          <span className="hero-tag">
            REVISTA DIGITAL
          </span>

          <h2>
            Historias que conectan,
            <span> ideas que inspiran.</span>
          </h2>

          <p>
            Descubre artículos, tendencias y noticias
            seleccionadas para mantenerte informada,
            inspirada y conectada con el mundo.
          </p>

          <div className="hero-buttons">
            <button>Explorar noticias</button>

            <button className="outline">
              Tendencias
            </button>
          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://i.pinimg.com/736x/0a/98/2a/0a982a6d289487d069c2ceaa336406aa.jpg"
            alt="Editorial"
          />

        </div>

      </section>
    </>
  );
}

export default Header;