import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Footer.css'
import imgLogo from '../assets/img/logo/logo.png'

const Footer = () => {
    return (
        <div className='pie-pagina'>
            <div className='grupo-1'>
                <div className="box">
                    <figure>
                        <Link to=''>
                            <img className="img-logo-footer" src={imgLogo} alt="LOGO DE AUTOSHOP" />
                        </Link>
                    </figure>
                </div>
                <div className="box">
                    <h2>SOBRE NOSOTROS</h2>
                    <p><i className="fa-solid fa-phone"></i>     +51 940 890 890</p>
                    <br />
                    <br />
                    <p><i className="fa-solid fa-house"></i>     Av. Buenos Aires N°394</p>
                </div>
                <div class="box">
                    <h2>SIGUENOS</h2>
                    <div className="red-social">
                        <Link to='' className="fa fa-facebook"></Link>
                        <Link to='' className="fa fa-instagram"></Link>
                        <Link to='' className="fa fa-twitter"></Link>
                        <Link to='' className="fa fa-youtube"></Link>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2022 <b>AUTOSHOP</b> - Todos los Derechos Reservados.</small>
            </div>
        </div>
    )
}

export default Footer
