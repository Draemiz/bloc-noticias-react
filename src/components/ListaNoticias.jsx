import { useEffect, useState } from "react";
import TarjetaNoticia from "./TarjetaNoticia";

function ListaNoticias() {

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setNoticias(data.slice(0, 12));
      })
      .catch((error) => console.error(error));

  }, []);

  return (
    <>
      <h2 className="section-title">
        Noticias destacadas
      </h2>

      <div className="grid-noticias">

        {noticias.map((noticia) => (

          <TarjetaNoticia
            key={noticia.id}
            info={noticia}
          />

        ))}

      </div>
    </>
  );
}

export default ListaNoticias;