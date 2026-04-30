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

    const signUpNewUser = signupAction
        async function signup(prevState, formData) {
        "use server";
        const email = formData.get("email");
        try {
        await signUpNewUser(email);
        alert(`Added "${email}"`);
        } catch (err) {
        return err.toString();
        }
    }

    return (
        <div>
            <h1>Cadastrar colaborador</h1>
            <form action={signUpNewUser} id='signup-form'> 
                <label>Nome</label>
                <input htmlFor="email" id="email"  type="email" required/>
                <br/>
                <label>Senha</label>
                <input type="password"  required />
                <br/> 
               <button type='submit' disabled={pending}> {pending ? "Enviando cadastro..." : "Cadastrar"}</button>
               {!!message && <p>{message}</p>}
            </form>
            <div>
            <button onClick={() => navigate('/')}> Voltar Tela inicial  </button>
        </div>
        </div>
    )
}



export default Register