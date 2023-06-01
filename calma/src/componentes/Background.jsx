import React from 'react';
import fundo from '../imagens/Desktop5.png'

const BackgroundImage = () => {
  return (
    <div className="w-screen bg-cover bg-no-repeat bg-fixed h-screen">
       <img src={fundo} alt="" />
    </div>
  );
};

export default BackgroundImage;