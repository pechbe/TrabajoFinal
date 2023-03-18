import React from 'react'
import {useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Login/Login.css'
import { signIn } from "../AuthServices";
import { useNavigate } from "react-router-dom";

const Login = () => {
<<<<<<< HEAD
=======
  
  const { authentication, setAuthentication } = useContext();
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const createUser = async (e) => {
    e.preventDefault();
    const response = await signIn(userCredentials);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.access_token);
      setAuthentication({
        ...authentication,
        isAuthenticated: true,
        successMessage: "Usuario logeado exitosamente",
      });
      navigate("/auth/signin");
    } else {
      setAuthentication({
        ...authentication,
        isAuthenticated: false,
        isError: true,
        errorMessage: "Credenciales incorrectas",
      });
    }
  };

>>>>>>> daniel-S
  return (
    <div className='login-container'>
      <div className='login-form'>
      <form className="Auth-modal-form" onSubmit={createUser}>
          <div className="Auth-modal-title">Iniciar sesión</div>
          <div
            className={`Auth-modal-alert${
              authentication.isError ? "" : " hidden"
            }`}
          >
            {authentication.errorMessage}
          </div>
          <div className="Auth-modal-form-group">
            <label htmlFor="username" className="Auth-modal-label">
              Username
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
          <div className="Auth-modal-form-group">
            <label htmlFor="password" className="Auth-modal-label">
              Contraseña
            </label>
            <input
              type="password"
              className="Auth-modal-input"
              id="password"
              name="password"
              value={userCredentials.password}
              onChange={handleInputChange}
            />
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
