import React, { Component } from 'react';
import logo from '../imagens/logo.png'

const Footer = () => {
    return ( 
    <footer className='bg-[#230033] flex items-center justify-center w-full h-[15vh] bottom-0 border-t-2 border-purple-300 mt-20'>
        <img src={logo}></img>
    </footer>
    
     );
}
 
export default Footer;