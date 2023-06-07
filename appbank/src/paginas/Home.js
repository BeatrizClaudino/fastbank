import React, { useEffect, useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Menu from '../componentes/Menu';
import Pix from '../../assets/pix.png'
import Barras from '../../assets/codigoBarras.png';
import Cell from '../../assets/cell.png';
import Transferencias from '../../assets/transferencia.png'
import Card from '../../assets/card.png';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import olhoAberto from '../../assets/eye.png'
import olhoFechado from '../../assets/closeeye.png'
import axios from 'axios';


//Colocando o ip da máquina dentro de uma variável para poder utilizar no codigo todo
export const ip = "192.168.0.104:8000"


export default function Home({ navigation }) {
    const [exibirSaldo, setExibirSaldo] = useState(false)
    const [exibirfatura, setExibirFatura] = useState(false)
    const [nome, setNome] = useState(false)
    //Passando os dados que eu quero pegar do usuário
    
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
                const token = await AsyncStorage.getItem("token");
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
                                console.log(error)
                    })})
                .catch((erro) => {
                        axios.post(`http://${ip}/auth/jwt/refresh`, { refresh: tokenRefresh }) // DAR O REFRESH
                            .then((res) => {
                                var tokenAccess = res.data.access
                                const testeToken = {
                                    headers: {
                                        Authorization : `JWT ${tokenAccess}`
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
    // FUNÇÃO PARA FAZER LOGOUT DA CONTA
    async function logout() {
        await AsyncStorage.removeItem("token");
        navigation.navigate('Login')
    }

    // const saldoAtual = () => {
    //     setSaldo(saldo)
    // }
    // const faturaAtual = () =>{
    //     setFatura(fatura)
    // }
    const teste = () => {
        navigation.navigate('Pix')
    }

    function trocarolho() {
        setExibirSaldo(!exibirSaldo)
        setExibirFatura(!exibirfatura)
    }

    return (
        <ScrollView className="flex-1">
            <LinearGradient className="h-[23%]" colors={['#6300B0', '#021249']}>
                <View className="p-5 flex flex-row space-x-28">
                    <View className="flex flex-row">
                        <TouchableOpacity onPress={() => navigation.navigate('InfoUser')}>
                            <Image source={require('../../assets/User.png')} />
                        </TouchableOpacity>
                        <Text className="text-cyan-50 pt-6 pl-2 text-[19px]">{`Olá, ${user.nome}`}</Text>
                    </View>
                    <View className="flex flex-row space-x-5 pt-5">
                        <TouchableOpacity onPress={trocarolho}>
                            <Image source={exibirSaldo ? olhoAberto : olhoFechado} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/interrogacao.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/mensagem.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="w-screen flex items-center">
                    <View className="flex justify-center pl-8 bg-[#EEF8FF] w-[90%] h-[55%] rounded-lg">
                        <Text className="text-[#505050] text-[18px]">Saldo em conta</Text>
                        <Text className="font-bold text-[20px]">{exibirSaldo ? `R$ ${user.conta.limite}` : "🟣🟣🟣🟣"}</Text>
                    </View>
                </View>
            </LinearGradient>
            <View className="flex w-screen pt-5">
                <View className="flex flex-row justify-evenly h-20">
                    <Menu textoFuncao='Pix' imagem={Pix} evento={teste} />
                    <Menu textoFuncao='Boleto' imagem={Barras} />
                    <Menu textoFuncao='Transferência' imagem={Transferencias} evento={() => navigation.navigate("Transferencia")}/>
                    <Menu textoFuncao='Empréstimo' imagem={Cell} evento={() => navigation.navigate("Valor")}/>
                </View>
                <TouchableOpacity>
                    <View className="flex items-center w-screen pt-6 pb-6" >
                        <View className="flex flex-row items-center justify-center space-x-7 bg-[#D0CFFF] w-[90%] h-[7vh] rounded-lg">
                            <Image source={Card} />
                            <Text className="text-[18px]">
                                Meus Cartões
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View className="flex items-center justify-center w-screen h-48 border-t-2 border-b-2 border-[#dfe5e7]">
                    <View className="flex justify-center w-[80%] h-[100%]">
                        <Text className="text-[22px] pb-3">
                            Cartão de crédito
                        </Text>
                        <Text className="text-base text-[16px] pb-2 text-[#4D4F51]">
                            Fatura atual
                        </Text>
                        <View className="flex h-10 bg-indigo-800 w-[40%] text-center items-center justify-center rounded-lg">
                            <Text className="text-white text-[16px] font-semibold ">
                            {exibirSaldo ? "R$ 155,00" : "🟣🟣🟣🟣"}
                            </Text>
                        </View>
                        <Text className="text-sm text-[16px] pt-2 text-[#4D4F51]">
                            Limite disponível de 200,00
                        </Text>
                    </View>
                </View>
                <View className="flex items-center justify-center w-screen h-48 border-t-1 border-b-2 border-[#dfe5e7]">
                    <View className="flex justify-center w-[80%] h-[100%]">
                        <Text className="text-[22px] pb-3">Transações recentes</Text>
                        <View className="flex flex-row justify-evenly h-20 pt-4">
                            <Menu textoFuncao='Transação pix' imagem={Pix} />
                            <Menu textoFuncao='Pagamento boleto' imagem={Barras} />
                            <Menu textoFuncao='Recarga' imagem={Cell} />
                            {/* <Menu textoFuncao='Transação pix' imagem={Pix}/> */}
                        </View>
                    </View> 
                </View> 
                <View className="h-[45vh] pt-9 flex items-center">
                    <Text className="pb-7 text-[24px]">Ánalise de gastos mensais</Text>
                    <Image className="w-full h-[24vh]" source={require('../../assets/grafico.jpg')}/>
                </View>
            </View>
        </ScrollView>
    )
}