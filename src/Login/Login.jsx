import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Login/Login.css'

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-form'>
        <form className='formLogin'>
        <h2 className='title'>Login</h2>
          <div className='form-group'>
            <label className='label-login'>
              <i class="fa-solid fa-user"></i>
              <input type='email' className='form-control' id='email' placeholder='Ingrese su Email' required/>
            </label>
          </div>
          <div className='form-group'>
            <label className='label-login'>
              <i class="fa-solid fa-lock"></i>
              <input type='password' className='form-control' id='password' placeholder='Ingrese su contraseña' required/>
            </label>
          </div>
          <Link to='/recupera' className='login-link'>Olvidaste tu Contraseña</Link>
          <div className='form-group'>
            <Link to=''>
              <button type='submit' className='btn-primary'>Inicia Sesion</button>
            </Link>
          </div>
          <div className='remember'>
            <label><input type="checkbox" />Recordar mi Cuenta</label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
