import { useState } from "react";
import CaixaTexto from "../componentes/CaixaTexto";
import Header from "../componentes/Header";

const CriarConta = ({conta}) => {
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [cpf, setCpf] = useState()
    const [datanascimento, setDatanascimento] = useState()
    const [celular, setcelular] = useState()
    const [aceita, setAceita] = useState(false)
    const [senha, setsenha] = useState()

    return ( 
    <div className='dark:bg-[#230033]'>
        <Header/>
        <div className="">
        <div className="flex items-center justify-center h-56">
            <h1 className='dark:text-light-100 font-semibold text-2xl'>Abra agora a sua conta digital</h1>
        </div>
         <form className='flex flex-col items-center justify-center gap-16 -mt-20 mx-5 '>
            <CaixaTexto quantidadeCaracteres={255} placeholder="Digite o seu nome" tipo="text" mudanca={e => setNome(e.target.value)}/>
            <CaixaTexto quantidadeCaracteres={11} placeholder="Digite o seu CPF" tipo="tel" mudanca={e => setCpf(e.target.value)}/>
            <CaixaTexto placeholder="Digite o seu E-mail" tipo="email" mudanca={e => setEmail(e.target.value)}/>
            <CaixaTexto placeholder="Digite a sua data de nascimento" tipo="date" mudanca={e => setDatanascimento(e.target.value)}/>
            <CaixaTexto quantidadeCaracteres={15} placeholder="Digite o seu telefone" tipo="tel" mudanca={e => setcelular(e.target.value)}/>
            <CaixaTexto quantidadeCaracteres={8} placeholder="Digite a sua senha" tipo="password" mudanca={e => setsenha(e.target.value)}/>
            <div className="w-full max-w-lg dark:text-light-100">
                <input name="inputConta" type="checkbox" value={aceita} onChange={() => setAceita(!aceita)} />
                <label>Autorizo o CashBank a tratar meus dados pessoais para envio de comunicações sobre seus produtos e serviços e também estou de acordo com a</label>
            </div>
            <button onClick={() => { 
                conta(nome, email, cpf, datanascimento, celular, senha)
                Click()
                }} className='bg-[#6936F5] w-80 h-14 rounded-2xl disabled:opacity-50' type={'button'} disabled={!aceita}> Logar</button>

            {/* <Botao evento={() =>login(cpf, senha)} tipo='submit' texto='Login'/> */}
        </form>
        </div>
    </div>
     );
}
 
export default CriarConta;