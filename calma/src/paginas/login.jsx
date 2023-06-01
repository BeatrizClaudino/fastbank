import React, { Component, useEffect, useState } from 'react';
import Header from '../componentes/Header';
import Botao from '../componentes/Botao';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CaixaTexto from '../componentes/CaixaTexto';

const ip = "http://10.109.72.7:8000/"

const Login = () => {
    const [cpf, setCpf] = useState("")
    const [senha, setSenha] = useState("")
    const navigate =  useNavigate()

    useEffect(()=>{
        
    })

    const logar = async () => {
        try {
            const res = await axios.post(`${ip}/auth/jwt/create`, {
                cpf: cpf,
                password: senha,
            }).then((res) => {
                alert("passou aqui"),
                localStorage.setItem('token', JSON.stringify(res.data.access));
                alert(res.data.access)
                navigate('/');
                return response.data;
            })
            } catch (error) {
                console.log('Erro no login:', error);
                throw new Error('Falha no login' + error);
            }
        };
    

    return (
        <div className='w-full h-screen dark:bg-gradient-to-t to-[#000511] from-[#1B3168]'>
            <Header />
            <div className="flex items-center justify-center h-2/6">
                <h1 className='dark:text-light-100 font-semibold text-2xl'>Faça login na sua conta</h1>
            </div>
            <form className='flex flex-col items-center justify-center gap-10 -mt-20 mx-5 '>
                <label className='dark: text-light-100'>CPF</label>
                <CaixaTexto className='w-full max-w-lg  h-9 rounded-md' tipo='text' required placeholder='Digite o seu cpf' mudanca={e => setCpf(e.target.value)} />
                <label className='dark: text-light-100'>Senha</label>
                <CaixaTexto className='w-full max-w-lg h-9 rounded-md' tipo='password' required placeholder='Digite a sua senha' mudanca={e => setSenha(e.target.value)} />
                <button onClick={() => {
                    logar()
                    // navigate('/')
                }} className='bg-[#6936F5] w-80 h-14 rounded-2xl' type={'button'}>Logar</button>

                {/* <Botao evento={() =>login(cpf, senha)} tipo='submit' texto='Login'/> */}
            </form>
        </div>
    );
}

export default Login;