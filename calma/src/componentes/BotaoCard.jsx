import React from 'react'

const BotaoCard = (props) => {
    return ( 
        <div className='w-full flex items-center justify-center pt-3'>

            <button onClick={props.evento} className='xl:text-[24px] xl:h-[6vh] bg-[#230033] dark:bg-[#7c18da] w-[40vw] h-[5vh] lg:w-80 rounded-full hover:bg-gradient-to-r text-white text-[17px] from-cyan-500 to-blue-500'>{props.texto}</button>
        </div>
    );
}
 
export default BotaoCard;