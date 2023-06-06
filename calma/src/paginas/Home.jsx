import React, { Component } from 'react';
import Header from '../componentes/Header';
import Botao from '../componentes/Botao';
import Celular from '../imagens/celularApp.png'
import TelaInicial from '../imagens/telaInicial.png'
import Quadradinhos from '../componentes/quadradosPequenos';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Banner from '../componentes/Banner';
import Footer from '../componentes/Footer';


const Home = () => {
    const navigate =  useNavigate()
    return (
        <div className='w-full h-full dark:bg-[#230033]'>
            <Header />
            <div className='flex-col 2xl:h-[70vh] md:h-[60vh] md:flex md:flex-row xl:h-[70vh] lg:h-[60vh] md:dark:bg-gradient-to-r to-[#6703a4] from-45% from-[#230033]  flex items-center w-full justify-center pb-9'>
                <div className='h-[20vh] 2xl:h-[80vh] sm:w-[80%] sm:h-[20vh] xl:w-[60%] flex justify-center flex-col items-center'>
                    <div className='flex flex-col text-center h-40 justify-center'>
                        <label className='font-sans font-semibold text-purple-950 dark:text-white text-[32px] lg:text-[50px] sm:text-[40px]'>
                            Mais do que um banco,
                        </label>
                        <label className='text-purple-950 font-semibold dark:text-white text-[25px] lg:text-justify lg:text-[40px] sm:text-[25px]'>Uma parceria para a vida</label>
                    </div>
                    <div className='hidden md:block pt-10'>
                    <Link to={"/Cadastro"}>
                        <Botao texto="Crie sua conta" />
                    </Link>
                    </div>
                    <div className='hidden md:flex lg:flex  dark:text-white flex-row space-x-8 md:pt-10 text-center w-full justify-center'>
                        <Quadradinhos titulo="15M +" subtitulo="clientes" />
                        <Quadradinhos titulo="12 Anos +" subtitulo="de história" />
                        <Quadradinhos titulo="30 +" subtitulo="Empresas" />
                    </div>
                </div>
                <div className=' lg:flex justify-center'>
                    <img className='w-52 md:w-56 lg:w-[20vw]' src={Celular} alt='celular com o aplicativo do banco'></img>
                </div>
                <div className='flex pt-10 lg:hidden xl:hidden 2xl:hidden md:hidden '>
                    <Link to={"/Cadastro"}>
                        <Botao texto="Crie sua conta" />
                    </Link>
                </div>
                <div className='md:hidden pt-8 lg:hidden dark:text-white flex flex-row space-x-10 sm:space-x-20 md:pt-10 text-center w-full justify-center'>
                    <Quadradinhos titulo="15M +" subtitulo="clientes" />
                    <Quadradinhos titulo="12 Anos +" subtitulo="de história" />
                    <Quadradinhos titulo="30 +" subtitulo="Empresas" />
                </div>
            </div>
            <div className='w-full h-full drop-shadow-lg flex flex-col items-center md:dark:bg-gradient-to-r to-[#6703a4] from-50% from-[#230033]'>
                <div className='w-[90%] rounded-t-xl  flex items-center justify-center bg-mulherDistraida bg-no-repeat bg-cover h-[250px] sm:h-[350px] md:h-[400px] lg:h-[600px] xl:h-[600px] xl:w-[1200px]'></div>
                <Banner nomeBotao="Conheça o app"  texto="Gerencie suas finanças com facilidade. Baixe agora o aplicativo do CashBank e tenha acesso a todas as funcionalidades do seu banco na palma da mão."/>
            </div>
            <div className='w-full drop-shadow-lg h-full pt-10 pb-16 flex flex-col items-center md:dark:bg-gradient-to-r to-[#6703a4] from-50% from-[#230033]'>
                <div className='w-[90%] rounded-t-xl flex items-center justify-center bg-mulheresCartao bg-no-repeat bg-cover h-[250px] sm:h-[350px] md:h-[400px] lg:h-[600px] xl:h-[600px] xl:w-[1200px]'></div>
                <Banner evento={() =>  navigate('/Cadastro')} nomeBotao="Solicite seu cartão" titulo="Para você: CashBank Card" texto="Descubra o mundo de benefícios e praticidade que o Cartão CashBank oferece. Solicite o seu hoje mesmo"/>
            </div>
            

            <div className='w-full bg-propaganda bg-no-repeat bg-cover h-[250px] sm:h-[350px] md:h-[400px] lg:h-[600px] xl:h-[600px] '>
               
            </div>
            <Footer/>
        </div>
    );
}

export default Home;