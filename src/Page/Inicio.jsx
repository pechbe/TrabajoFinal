import React, { useEffect, useState } from "react";
import "../Page/Inicio.css";
import "../mediaQuery/MediaQuery.css";
import "../mediaQuery/MediaQueryM.css";
import mot from "../data/motores";
import repus from "../data/repuestos";
import Card from "../Components/card";
import acceso from "../data/accesorios";
import lubri from "../data/lubricantes"

const Inicio = ({ handleClick }) => {

  const [articulos, setArticulos] = useState([])
  useEffect(()=>{
    fetch('http://127.0.0.1:5000/products?page=1&per_page=50', {
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY3OTE3MzA5MywianRpIjoiODZiZTQ1ODktNWM4Ny00MzcwLThmZjItMjgwOGFiOTRlYTRiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjc5MTczMDkzLCJleHAiOjE2NzkxOTEwOTN9.HSae7TMBZwk5pIjxbgYn1S-I7eMLe9DJQZTRKqFHFyE'
      }
    })
    .then((response)=> response.json())
    .then((json)=> setArticulos(json.results))
  }, [])

  return (
    <div className="box__inicio" id="box__ini">
      <div className="box__img">
        <div className="box__container-ini">
          <div className="box__message">
            <div className="box__publicidad">
              <h1>Bienvenidos</h1>
              <p>
                Conoce lo mejor en repuestos
                <br />
                lubricantes, motores y mas...
              </p>
              <div className="box__ver-Mas">
                <a href="#ver-mas">VER MAS</a>
              </div>
            </div>

            <div className="box__video">
              <iframe
                className="video-Y"
                src="https://www.youtube.com/embed/tNaYJX9k2oo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div id="ver-mas">
      </div>

      <div className="content-galery">
        <section className="section-galery"></section>
      </div>

      <div className="box__container-principal">
        <div className="box__container-card">
          <h3>Articulos</h3>
          <div className="box__section-card">
          {articulos.map((item) => (
              <Card key={item.id} item={item} handleClick={handleClick} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
