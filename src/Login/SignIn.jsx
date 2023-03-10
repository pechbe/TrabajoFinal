import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Login/SignIn.css'

const SignIn = () => {
    // const [registro, setRegistro] = useState(false);

    return (
        <div className='login-container'>
            <div className='login-form'>
                <form className='formLogin'>
                    <h2 className='title'>Registrarse</h2>
                    <div>
                        <label className='label-login'>
                            <i class="fa-solid fa-envelope"></i>
                            <input type='email' className='form-control' id='email' placeholder='Ingrese su Email' />
                        </label>
                    </div>
                    <div className='form-group'>
                        <label className='label-login'>
                            <i class="fa-solid fa-lock"></i>
                            <input type='password' className='form-control' id='password' placeholder='Ingrese su contraseña' />
                        </label>
                    </div>
                    <div className='form-group'>
                        <Link to=''>
                            <button type='submit' className='btn-primary'>Registrarse</button>
                        </Link>
                    </div>
                    <div className='acuerdo'>
                        <label><input type="checkbox" />Estoy de Acuerdo</label>
                    </div>
                    <div className='login-ref'>
                        <p>Ya tienes una cuenta? <Link to='/login'> Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn
