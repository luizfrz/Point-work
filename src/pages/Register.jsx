import { useState } from 'react'
import { useFormStatus } from "react-dom";
import { useNavigate } from 'react-router-dom'
import { useActionState } from "react";
// import { signUpNewUser } from "../api/Signup";

import "../styles/Register.css"

function Register() {
    const navigate = useNavigate()
    const [message, signupAction] = useActionState(signup, null);
    const { pending } = useFormStatus();

        async function signup(prevState, formData) {

        const email = formData.get("email");
        try {
        await signUpNewUser(email);
        alert(`Adicionado "${signup}"`);
        } catch (err) {
        return err.toString();
        }
    }

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
               <button action={email} className='btn-signup' type='submit' disabled={pending}> {pending ? "Enviando cadastro..." : "Cadastrar"}</button>
               {!!message && <p>{message}</p>}
            </form>
            </div>
            <div>
        </div>
        </div>
    )
}

export default Register