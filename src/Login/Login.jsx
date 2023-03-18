import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Login/Login.css'
import { signIn } from "../AuthServices";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const { authentication, setAuthentication } = useContext();
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const signIn = async (e) => {
    e.preventDefault()
    const response = await fetch("http://127.0.0.1:5000/auth/signin", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    const datajson = await response.json();

    console.log(datajson)

    const status = response.status
    if (status === 200) {
      localStorage.setItem("token", datajson.access_token)
      navigate("/buscar")
    }
  }

  return (
    <div className='login-container'>
      <div className='login-form'>
        <form className='formLogin' onSubmit={signIn} >
        <h2 className='title'>Login</h2>
          <div className='form-group'>
            <label className='label-login'>
              <i className="fa-solid fa-user"></i>
              <input type='text' name='username' onChange={handleInputChange}  className='form-control' id='email' placeholder='Ingrese su usuario' required/>
            </label>
          </div>
          <div className='form-group'>
            <label className='label-login'>
              <i className="fa-solid fa-lock"></i>
              <input type='password' name='password' onChange={handleInputChange}  className='form-control' id='password' placeholder='Ingrese su contraseña' required/>
            </label>
            <input
              type="text"
              className="Auth-modal-input"
              id="username"
              name="username"
              value={userCredentials.username}
              onChange={handleInputChange}
            />
          </div>
          <Link to='/recupera' className='login-link'>Olvidaste tu Contraseña</Link>
          <div className='form-group'>

              <button type='submit' className='btn-primary'>Inicia Sesion</button>

          </div>
          <div className='remember'>
            <label><input type="checkbox" />Recordar mi Cuenta</label>
          </div>
          <button
            className="Auth-modal-button"
            type="submit"
            disabled={authentication.isLoading ? true : false}
          >
            Iniciar sesión
          </button>
          <p className="Auth-modal-option">
            ¿No tienes cuenta?{" "}
            <span onClick={handleChangeLoginToRegister}>Registrar</span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
