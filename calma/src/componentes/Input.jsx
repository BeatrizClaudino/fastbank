import React, { Component } from 'react';

const RetornarDados = (props) => {
    return ( 
        <>
        <div className='pt-10 w-full h-full flex justify-center'>
            <label className='text-black text-[20px]'>{props.texto}</label>
            <input className='w-[80%] p-5 rounded-lg drop-shadow-lg max-w-lg h-10 bg-white text-black' value={props.value} maxLength={props.quantidadeCaracteres} placeholder={props.placeholder} required type={props.tipo} onChange={props.mudanca} />
        </div>
        </>
    );
}
 
export default RetornarDados;