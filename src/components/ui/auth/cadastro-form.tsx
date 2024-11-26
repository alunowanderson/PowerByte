"use client"


import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../input";
import { Button } from "../botao";

export const CadastroForm = () => {
    const router = useRouter();
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPassWordField] = useState('');


    const handleEnterButton = () => {
        router.replace('/home');
    }

    return(
        <>
            <Input
                 placeholder="Digite seu nome" 
                 value={nameField}
                 onChange={t => setNameField(t)}
            />   

            <Input
                 placeholder="Digite seu e-mail" 
                 value={emailField}
                 onChange={t => setEmailField(t)}
            />      

            <Input
                 placeholder="Digite sua senha" 
                 value={passwordField}
                 onChange={t => setPassWordField(t)}
                 password

            />      

            <Button
                label="Criar conta"
                onClick={handleEnterButton}
                size={1}
            />

          

        </>
    );
}