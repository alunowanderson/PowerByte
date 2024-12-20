"use client"


import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../input";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../botao";

export const LoginForm = () => {
    const router = useRouter();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPassWordField] = useState('');


    const handleEnterButton = () => {
        router.replace('/home');
    }

    return(
        <>
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
                label="Entrar"
                onClick={handleEnterButton}
                size={1}
            />

          

        </>
    );
}