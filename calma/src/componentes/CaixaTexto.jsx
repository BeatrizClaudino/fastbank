import React, { Component } from 'react';

const CaixaTexto = (props) => {
    return ( 
        <>
        <input className='w-full max-w-lg h-9 outline-none border-b-2 border-slate-700 bg-transparent text-light-100' value={props.value} maxLength={props.quantidadeCaracteres} placeholder={props.placeholder} required type={props.tipo} onChange={props.mudanca} />
        </>
    );
}
 
export default CaixaTexto;