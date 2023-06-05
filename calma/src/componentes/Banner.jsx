import React, { Component } from 'react';
import BotaoCard from './BotaoCard';


const Banner = (props) => {
    return(
    
    <div className='flex justify-center w-[90%] bg-white h-[20vh] rounded-b-xl xl:w-[1200px] xl:h-[25vh] items-center'> 
        <div className='w-[90%] pt-3 flex text-center flex-col text-[18px] items-center'>
            <label className='font-bold text-[#7E7E7E] pb-2 xl:text-[30px]'>
                {props.titulo}
            </label>
            <label className='flex text-justify text-[#7E7E7E] text-[15px] xl:w-[80%] xl:text-[25px]'>
                {props.texto}
            </label>
          <BotaoCard texto={props.nomeBotao} evento={props.evento}/>
        </div>
    </div>
    )
}
 
export default Banner;