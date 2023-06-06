import React, { Component, useEffect, useState } from 'react';
import Header from '../componentes/Header';
import Botao from '../componentes/Botao';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CaixaTexto from '../componentes/CaixaTexto';
import Swal from "sweetalert2";

const ip = "192.168.0.104:8000"

const Login = () => {
    const [cpf, setCpf] = useState("")
    const [senha, setSenha] = useState("")
    const [token, setToken] = useState("")
    const navigate =  useNavigate()

    const showAlert = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bem vindo ao CashBank!',
            showConfirmButton: false,
            timer: 1500
          })
        navigate('/Teste')
      }; 

    const mensagemErro = () =>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Senha ou CPF inválidos!!',
            footer: '<a href="">Por favor, revise os dados fornecidos</a>'
          })
    }
  
    const login = () => {
        if (!cpf) {
          console.log('Preencha o campo cpf')
          return
        }
        else if (cpf.length < 11) {
            console.log('CPF inválido!')
        }
        else if (!senha) {
            console.log('Preencha o campo senha')
        }
        else {
          enter()
        }
      }
      const enter = async () => {
        axios.post(`http://${ip}/auth/jwt/create`, {
          cpf: cpf,
          password: senha,
        }).then((resposta) => {
            setToken(resposta.data.access)
            localStorage.setItem('token', JSON.stringify(resposta.data))
            showAlert()
        }).catch((erro) => {
            if (erro.response.status === 401){
                mensagemErro()
            }
            else{
              console.log(erro + "errinho")
            }
        })
      }
    return (
        <div className='w-full h-screen dark:bg-[#230033]'>
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
                    login()
                   
                }} className='bg-[#6936F5] w-80 h-14 rounded-2xl' type={'button'}>Logar</button>
            </form>
        </div>
    );
}

export default Login;