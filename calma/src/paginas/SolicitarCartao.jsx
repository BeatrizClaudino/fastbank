import React, { Component, useEffect, useState } from 'react';
import CriarConta from './CriarConta';
import CaixaTexto from '../componentes/CaixaTexto';
import Header from '../componentes/Header';
import axios from 'axios';

const ip = "10.109.72.9:8000"


const SolicitarCartao = () => {
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    const [cep, setCep] = useState('')
    
    useEffect(() =>{
        axios.get(`https://viacep.com.br/ws/${cep}/json`)
        .then((res)=>{
            if(res.data.erro){
                setLogradouro('')
                setBairro('')
                setCidade('')
                setUf('')
            }else{
                setCidade(res.data.localidade)
                setLogradouro(res.data.logradouro)
                setUf(res.data.uf)
                setBairro(res.data.bairro)
            }
        }).catch((err) =>{
            setBairro('')
            setCidade('')
            setLogradouro('')
            setUf('')
        })
    }, [cep])

    const verificarCampos = () =>{
        if (!logradouro){
            alert('Preencha o campo logradouro')
        }else if (!bairro){
            alert('Preencha o campo bairro')
        }else if(!cidade){
            alert('preencha o campo cidade')
        }else if(!uf){
            alert('preencha o campo uf')
        }else if(!cep){
            alert('preencha o campo cep')
        }
        else{
            enviarDados()
        }
    }
    const enviarDados = async ()=>{
        axios.post(`http://${ip}/app/endereco/`,{
            logradouro:logradouro,
            bairro:bairro,
            cidade:cidade,
            uf:uf,
            cep:cep,
            fk_cliente: fk_cliente
        })
    }

    return (
        <div className='dark:bg-[#230033]'>
        <Header/>
        <div className="">
        <div className="flex items-center justify-center h-56">
            <h1 className='dark:text-light-100 font-semibold text-2xl'>Agora precisamos do seu endereço</h1>
        </div>
         <form className='flex flex-col items-center justify-center gap-16 -mt-20 mx-5 '>
            <CaixaTexto quantidadeCaracteres={255} placeholder="Digite o seu CEP" tipo="text" mudanca={(e) => setCep(e.target.value)}/>
            <CaixaTexto quantidadeCaracteres={100} value={bairro} placeholder="Digite nome do seu bairro" tipo="text" mudanca={e => setBairro(e.target.value)}/>
            <CaixaTexto quantidadeCaracteres={150} placeholder="Digite o seu logradouro" tipo="text" mudanca={e => setLogradouro(e.target.value)}/>
            <CaixaTexto quantidadeCaracteres={50} placeholder="Digite o nome da sua Cidade" tipo="text" mudanca={e => setCidade(e.target.value)}/>
            <CaixaTexto quantidadeCaracteres={2} placeholder="Uf" tipo="text" mudanca={e => setUf(e.target.value)}/>
            <div className="w-full max-w-lg dark:text-light-100">
                <input name="inputConta" type="checkbox"  onChange={() => setAceita(!aceita)} />
                <label>Ao prosseguir com a solicitação do cartão, você autoriza o uso dos seus dados para o envio do mesmo. Suas informações serão tratadas com confidencialidade e não compartilhadas sem o seu consentimento.</label>
            </div>
            <button onClick={() => { 
                conta(nome, email, cpf, datanascimento, celular, senha)
                Click()
                }} className='bg-[#6936F5] w-80 h-14 rounded-2xl disabled:opacity-50' type={'button'}> Logar</button>
        </form>
        </div>
    </div>
    )
}
export default SolicitarCartao;