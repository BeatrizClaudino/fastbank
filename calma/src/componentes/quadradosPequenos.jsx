import React, { Component } from 'react';

const Quadradinhos = (props) => {
    return (
            <div className=' h-[10vh] flex flex-col justify-center lg:bg-transparent xl:w-[20%]'>
                <label className="text-[25px] sm:text-[30px] text-purple-950 dark:text-white font-bold lg:text-[35px]">
                    {props.titulo}
                </label>
                <label className="text-[15px] sm:text-[20px] text-purple-700  dark:text-purple-200 font-semibold lg:text-[20px]">
                {props.subtitulo}
                </label>

            </div>
     );
}
 
export default Quadradinhos;