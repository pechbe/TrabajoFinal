import React from 'react'
import { Link } from 'react-router-dom'
import '../Page/Contacto.css'
import imgLogo from "../assets/img/logo/logo.png";
import imgContact from '../assets/img/contacto/image-1.svg'

const Contacto = () => {
  return (
    <div className='form-width'>
        <form id="form-container">
                <div className="row">
                    {/* <!-- form input --> */}
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        {/* <!-- logo --> */}
                        <div className="logotipe d-flex justify-content-center">
                            <Link href="#" className="d-flex align-items-center">
                                <img src={imgLogo} className="img-fluid" alt='logo.png'/>
                                <h3 className="ubuntu">AUTOSHOP</h3>
                            </Link>
                        </div>
                        <h4 class="text-center text-uppercase anton">Contacto</h4>
                        <hr/>
                        {/* <!-- inputs --> */}
                        <div className="inputs-form form-group">
                            <label for="username" className="ubuntu">Nombre y apellido:</label>
                            <input type="text" name="username" id="username" className="form-control mb-4" required/>
                            <label for="email_form" className="ubuntu">Correo Electrónico:</label>
                            <input type="email" name="email_form" id="email_form" className="form-control mb-4" required placeholder="ejemplo@email.com"/>
                            <label for="username" class="Comentario">Comentario:</label>
                            <textarea name="" id="coment" cols="40" rows="10" placeholder="Ingrese su comentario"></textarea>
                            <button type="submit" className="btn mt-1 ubuntu" id="send-form">Enviar</button>
                        </div>
                    </div>
                    {/* <!-- form img --> */}
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <figure className="w-100 img-form" id="box__img-message">
                            <img src={imgContact}/>
                        </figure>
                    </div>
                </div>
            </form>
    </div>
  )
}

export default Contacto
