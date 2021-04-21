import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import Formulario from "./components/Formulario";
import NavReactB from "./components/NavReactB";
import { useState } from "react";
import Carousel from "./components/Carousel";

const peliculas = [
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mejores-peliculas-2020-tenet-1597912469.jpg?crop=1.00xw:0.813xh;0,0.0112xh&resize=980:*",
    titulo: "Tenet",
    descripcion:
      " Tenet es el verdadero blockbuster del verano, la película que pone a prueba la capacidad real de las salas en plena crisis sanitaria mundial.",
    puntaje: "8 puntos",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mejores-peliculas-2020-hasta-el-cielo-1597913544.jpg?crop=1.00xw:0.893xh;0,0.107xh&resize=980:*",
    titulo: "Hasta el cielo ",
    descripcion:
      "Modelo 2020Daniel Calparsoro, sobre un joven delincuente que lleva al límite sus capacidades para enfrentarse al que fue su mentor, nada menos que Luis Tosar.",
    puntaje: "9 puntos",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mejores-peliculas-2020-nuevos-mutantes-1576139685.jpg?crop=1xw:1xh;center,top&resize=980:*",
    titulo: "Los nuevos mutantes ",
    descripcion:
      "Mil retrasos ha sufrido el estreno de esta prolongación del universo X-Men, ahora con los primeros alumnos graduados en la escuela de Charles Xavier como protagonistas.",
    puntaje: "6 puntos",
  },
];

export default function App() {
  const [section, setSection] = useState("Formulario");
  console.log("🚀 - App - section", section);

  return (
    <div className="">
      {/* <Nav /> */}
      <NavReactB setSection={setSection} />

      {section === "Carousel" && <Carousel />}

      {section === "Cards" && (
        <div className="container d-flex">
          {peliculas.map((pelicula) => (
            <Card
              imagen={pelicula.image}
              titulo={pelicula.titulo}
              descripcion={pelicula.descripcion}
              puntaje={pelicula.puntaje}
            />
          ))}
        </div>
      )}

      {section === "Formulario" && <Formulario />}
    </div>
  );
}
