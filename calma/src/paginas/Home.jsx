import React, { Component } from 'react';
import Header from '../componentes/Header';
import Botao from '../componentes/Botao';
import Celular from '../imagens/celularApp.png'
import Cartao from '../imagens/cartao.png'
import app from '../imagens/app.png'
import Mulher from '../imagens/Mulherempresaria.jpg'
import { Link } from 'react-router-dom';

const Home = ({refresh}) => {
    return (
        <div className='w-full bg-gradient-to-t to-[#000511] from-[#1B3168]'>
            <Header />
            <div className='flex justify-center flex-col items-center h-[80vh]'>
                <div className='flex flex-col text-justify h-40 justify-center'>
                    <label className='dark:text-white text-[32px]'>
                        Mais do que um banco,
                    </label>
                    <label className='dark:text-white text-[25px]'>Uma parceria para a vida</label>
                </div>
                <div>
                    <Botao texto="Crie sua conta" />
                </div>
                <div className='dark:text-white flex space-x-8 pt-14 text-center w-[90%] justify-center'>
                    <div className='flex flex-col'>
                        <label className='text-[25px]'>
                            15M +
                        </label>
                        <label>
                            Clientes
                        </label>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[22px]'>
                            12 anos
                        </label>
                        <label>
                            de história
                        </label>
                    </div>
                    <div className='flex flex-col'>
                        <label className='text-[25px]'>
                            30 +
                        </label>
                        <label>
                            Empresas parceiras
                        </label>
                    </div>
                </div>
                <div className='w-full h-20 pt-6 flex justify-center'>
                    <img className='w-32 h-32'src={Celular} alt='celular com o aplicativo do banco'></img>
                </div>
            </div>
            <div className='w-screen flex flex-col items-center pt-10'>
                <div className='flex flex-col text-center'>
                    <label className='dark:text-white text-[30px]'>Conheça o CashCard</label>
                    <label className='dark:text-white text-[18px]'>Perfeito e feito para você!</label>
                </div>
            </div>
        </div>
    );
}

export default Home;