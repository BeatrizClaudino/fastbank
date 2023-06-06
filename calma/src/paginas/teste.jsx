import axios from "axios";
import Header from "../componentes/Header";
import CriarConta from "./CriarConta";
import SolicitarCartao from "./SolicitarCartao";
import { useEffect, useState } from "react";
import CaixaTexto from "../componentes/CaixaTexto";
import RetornarDados from "../componentes/Input";

const ip = "10.109.72.9:8000"
const Teste = () => {
    const [exibirSaldo, setExibirSaldo] = useState(false)
    const [exibirfatura, setExibirFatura] = useState(false)

    const [user, setUser] = useState({
        nome: "Carregando...",
        conta: {
            agencia: "Carregando...",
            numero: "Carregando...",
            limite: "Carregando"
        },
        email: "Carregando...",
        data_nascimento: "Carregando...",
        cpf: "Carregando..."
    });

    useEffect(() => {
        const getToken = async () => {
            try {
                const token = localStorage.getItem("token");
                const tokenRefresh = JSON.parse(token).refresh
                const acessToken = JSON.parse(token).access;
                if (!token) {
                    Alert.alert('Opa, parece que você não está logado!');
                    return navigation.navigate('Login');
                }

                axios.get(`http://${ip}/auth/users/`, {
                    headers: {
                        Authorization: `JWT ${acessToken}`
                    }

                })
                    .then(res => {
                        axios.get(`http://${ip}/app/conta/${res.data[0].id}/`,
                            {
                                headers: {
                                    Authorization: `JWT ${acessToken}`
                                }
                            })
                            .then(resConta => {
                                setUser({ ...res.data[0], conta: resConta.data })
                            }).catch((error) => {
                                alert(error)
                            })
                    })
                    .catch((erro) => {
                        axios.post(`http://${ip}/auth/jwt/refresh/`, { refresh: tokenRefresh }) // DAR O REFRESH
                            .then((res) => {
                                console.log(res.data.access)
                                var tokenAccess = res.data.access
                                const testeToken = {
                                    headers: {
                                        Authorization: `JWT ${tokenAccess}`
                                    },
                                }
                                console.log('oi')
                                axios.get(`http://${ip}/auth/users/`, testeToken
                                
                                    

                                )
                                    .then(res => {
                                        axios.get(`http://${ip}/app/conta/${res.data[0].id}/`, testeToken)
                                            .then(resConta => {
                                                setUser({ ...res.data[0], conta: resConta.data })
                                            }).catch((error) => {
                                                alert(error)
                                            })
                                    })
                            }
                            ).catch((erro) => {
                                console.log('entrou4', erro);
                                alert('errooioioioio', erro)
                            })
                    })
            } catch (error) {
                console.log(error);
                // Trate o erro adequadamente
            }
        };

        getToken();
        return () => {
            setUser
        };
    }, []);

    function trocarolho() {
        setExibirSaldo(!exibirSaldo)
        setExibirFatura(!exibirfatura)
    }

    return (
        <>
            <Header />
            <div className="w-full h-screen dark:bg-[#230033] flex items-center justify-center flex-col">
                    <label className="dark:text-white text-[40px] pb-9">
                        Seus dados
                    </label>
                <div className="flex flex-col drop-shadow-lg backdrop-blur-xl bg-slate-300/30 w-[80%] md:w-[40%] rounded-2xl">
                    <div className="flex justify-center flex-col items-center">
                        <RetornarDados value={user.nome} />
                        <RetornarDados value={user.cpf} />
                        <RetornarDados value={user.data_nascimento} />
                        <RetornarDados value={user.email} />
                        <RetornarDados value={user.conta.numero} />
                        <RetornarDados value={user.conta.agencia} />
                        <RetornarDados value={user.conta.limite} />
                    </div>
                </div>
            </div>
        </>
    );
}


export default Teste;