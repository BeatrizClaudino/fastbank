import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import Home from "./paginas/Home";
import Login from "./paginas/login";
import CriarConta from './paginas/CriarConta'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import SolicitarCartao from "./paginas/SolicitarCartao";
import SolicitarCard from "./paginas/teste";
const API_URL = 'http://192.168.0.104:8000';

function App() {
    const navigate = useNavigate()
    //iniciando o estado do logado como falso
    const [logado, setLogado] = useState(false)
    const [dados, setDados] = useState("")
    const [token, setToken] = useState("")

    const mensagem = () =>{
        Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1800
          })
          navigate('/Login')
    }
    const mensagemErro = () =>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Não foi possível criar a sua conta!',
            footer: '<a href="">Por favor, revise os dados fornecidos</a>'
          })
    }

    const refreshToken = async (refreshToken) => {
        try {
            const pegarToken = await axios.get(token)
            console.log(pegarToken)
            const response = await axios.post(API_URL + '/auth/jwt/refresh', {
                refresh: refreshToken
            });
            return response.data
        } catch (error) {
            throw new Error('Falha no refresh token')
        }
    };
    const criarconta = (nome, email, cpf, datanascimento, celular, senha) => {
        axios.post(`${API_URL}/auth/users/`, {
            nome: nome,
            celular: celular,
            email: email,
            data_nascimento: datanascimento,
            cpf: cpf,
            password: senha
        }).then((res) => {
            mensagem()
            console.log('passei awqui')
            axios.post(`${API_URL}/auth/jwt/create`, {
                cpf: cpf,
                password: senha,
            
            }).then((res) => {
                setToken(JSON.stringify(res.data))
                localStorage.setItem('token', token)
                console.log(res)
                
            })
            .catch((err) => {
                mensagemErro()
                console.log('aquiaquiaqui', err)
            })
        }).catch((err) => {
            mensagemErro()
            console.error("erro" +err)
        })
    }

useEffect(() => {
    setDados(JSON.parse(localStorage.getItem("dados")))
}, [logado])
return (
    <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Teste' element={<SolicitarCard conta={criarconta} />} />
        <Route path="/Cadastro" element={<CriarConta conta={criarconta} />} />
        <Route path='/' element={<Home refresh={refreshToken} />} />
        <Route path='/SolicitarCartao' element={<SolicitarCartao />}/>
    </Routes>

)
};

export default App;