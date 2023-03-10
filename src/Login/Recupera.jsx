import React from 'react'
import { Link } from 'react-router-dom'

const Recupera = () => {
  return (
    <div className='login-container'>
      <div className='login-form'>
        <form className='formLogin'>
        <p className='title'>Recuperar Contraseña</p>
          <div className='form-group'>
            <label className='label-login'>
              <i class="fa-solid fa-envelope"></i>
              <input type='text' className='form-control' id='email' placeholder='Ingrese su Correo' />
            </label>
          </div>
          <div className='form-group'>
            <Link>
              <button type='submit' className='btn-enviar'>Enviar</button>
            </Link>
          </div>
          <Link to='/' className='login-link'>Regresar a Inicio</Link>
        </form>
      </div>
    </div>
  )
}

export default Recupera
