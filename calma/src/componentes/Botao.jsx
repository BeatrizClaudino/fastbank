import React from 'react'

const Botao = (props) => {
    return ( 
        <button onClick={props.evento} className='bg-[#230033] dark:bg-[#7c18da] w-60 lg:w-80 h-14 rounded-full hover:bg-gradient-to-r text-white text-[20px] from-cyan-500 to-blue-500' type={props.tipo}>{props.texto}</button>
    );
}
 
export default Botao;