import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActionState } from "react";

import "../styles/Register.css"

function Register() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='Inital'>
            <h1>Cadastrar colaborador</h1>
            <button className='btn-back'  onClick={() => navigate('/')}> Voltar </button>
            </div>

            <div className='Form-modal'>
            <form  id='signup-form'> 
                <label>Nome</label>
                <input htmlFor="email" id="email"  type="email" required/>
                <br/>
                <label>Senha</label>
                <input type="password"  required />
                <br/> 
               <button  className='btn-signup' type='submit'>Cadastrar</button>
            </form>
            </div>
            
            <div>
        </div>
        </div>
    )
}

export default Register