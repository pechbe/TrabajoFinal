import React from 'react'
import { Link } from 'react-router-dom'
import "../Page/Ofertas.css";
import envios from '../assets/img/ofertas/envios.png'
import oferta1 from '../assets/img/ofertas/oferta-1.png'
import oferta2 from '../assets/img/ofertas/oferta-2.png'
import oferta3 from '../assets/img/ofertas/ofertas-3.png'
import oferta4 from '../assets/img/ofertas/ofertas-4.png'

const Ofertas = () => {
  return (
    <div className='cont-ofertas'>
      <div className="ofertas-title">
        <h2>OFERTAS EXCLUSIVAS</h2>
      </div>
      <div className="container" id="container-ofertas">
        {/* Ofertas */}
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {/* Oferta-1 */}
          <div className="col">
            <div className="card">
              <Link to="/">
                <img
                  src={oferta1}
                  className="card-img-top"
                  alt="Oferta-1"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Oferta Pack Nissan</h5>
              </div>
            </div>
          </div>
          {/* Oferta-2 */}
          <div classNames="col">
            <div className="card">
              <Link to="/">
                <img
                  src={oferta2}
                  className="card-img-top"
                  alt="Oferta-2"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Oferta pack Toyota</h5>
              </div>
            </div>
          </div>
          {/* Oferta-3 */}
          <div className="col">
            <div className="card">
              <Link to="/">
                <img
                  src={oferta3}
                  className="card-img-top"
                  alt="Oferta-3"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Combo de lubricaión Diesel 15W40</h5>
              </div>
            </div>
          </div>
          {/* Oferta-4 */}
          <div className="col">
            <div className="card">
              <Link to="/">
                <img
                  src={oferta4}
                  className="card-img-top"
                  alt="Oferta-4"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">Combro de lubricación 20W50</h5>
              </div>
            </div>
          </div>
        </div>
        {/* Envio-img */}
        <div className="envios-img">
          <figure>
            <img
              src={envios}
              className="card-img-top"
              alt="Envios"
            />
          </figure>
        </div>
      </div>
    </div>
    
    
  )
}

export default Ofertas
