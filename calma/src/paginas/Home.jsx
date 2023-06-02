import React, { Component } from 'react';
import Header from '../componentes/Header';
import Botao from '../componentes/Botao';
import Celular from '../imagens/celularApp.png'
import Cartao from '../imagens/cartao.png'
import TelaInicial from '../imagens/telaInicial.png'
import mocaCelular from '../imagens/mulherDistraida.png'

const Home = ({ refresh }) => {
    return (
        <div className='w-full h-full bg-[#230033]'>
            <Header />
            <div className='flex-col md:flex-row xl:h-[70vh] lg:h-[60vh] sm:dark:bg-gradient-to-r to-[#6703a4] from-60% from-[#230033] flex items-center w-full justify-center border-b-[1px] border-b-[#550868]'>
                <div className='flex justify-center flex-col items-center h-[50vh] sm:w-[60%] '>
                    <div className='flex flex-col text-center h-40 justify-center'>
                        <label className='dark:text-white text-[32px] lg:text-[50px]'>
                            Mais do que um banco,
                        </label>
                        <label className='dark:text-white text-[25px] lg:text-justify text-[40px]'>Uma parceria para a vida</label>
                    </div>
                    <div className='hidden md:block '>
                        <Botao texto="Crie sua conta" />
                    </div>
                    <div className=' dark:text-white flex flex-row space-x-9 pt-14 text-center w-full justify-center'>
                        <div className='flex flex-col'>
                            <label className='text-[25px] font-bold'>
                                15M +
                            </label>
                            <label className='text-[#929292]'>
                                Clientes
                            </label>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[25px] font-bold'>
                                12 anos
                            </label>
                            <label className='text-[#929292]'>
                                de história
                            </label>
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-[25px] font-bold'>
                                30 +
                            </label>
                            <label className='text-[#929292]'>
                                Empresas
                            </label>
                        </div>
                    </div>
                </div>
                <div className=' lg:flex justify-center'>
                    <img className='md:w-56 lg:w-80 ' src={TelaInicial} alt='celular com o aplicativo do banco'></img>
                </div>
                <div className='lg:hidden xl:hidden 2xl:hidden md:hidden pb-20'>
                    <Botao texto="Crie sua conta" />
                </div>
            </div>
            <div className='w-full flex flex-col items-center'>
                <div className='w-full flex items-center justify-center bg-mulherDistraida bg-no-repeat bg-cover h-[250px] sm:h-[350px] md:h-[400px] lg:h-[800px]'></div>
                <div className='w-full h-screen pt-14 flex flex-col items-center'>
                    <div className='flex text-center backdrop-blur-smh-32 w-[90%] rounded-lg items-center'>
                        <label className='text-purple-200'>
                            Gerencie suas finanças com facilidade - Baixe agora o aplicativo do CashBank e tenha acesso a todas as funcionalidades do seu banco na palma da mão.                    </label>
                    </div>
                    <div className='w-full flex flex-col items-center pt-10'>
                        <div className='w-[85%] block md:hidden pt-6'>
                            <div className='w-[55vw] h-[30vh] bg-[#8594E7] rounded-lg flex items-center justify-center'>
                                <img className='h-[22vh]' src={Cartao}></img>
                            </div>
                        </div>
                        <div className='flex flex-row-reverse w-[85%]  md:hidden'>
                            <div className='w-[55vw] h-[30vh] bg-[#8594E7] rounded-lg flex items-center justify-center'>
                                <img className='w-[200px]' src={Celular}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;