import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function login() {
    //CONSTANTES UTILIZADAS NO DECORRER DO PROJETO E SÃO DADOS OBRIGATÓRIOS NO INPUT PELO USUÁRIO
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [cpf, setCpf] = useState()
    const [dataNascimento, setDataNascimento] = useState()
    const [celular, setCelular] = useState()
    const [cep, setCep] = useState()

    //PARA REALIZAR O UPLOAD TODAS AS CONDIÇÕES DEVEM SER ATENDIDAS
    const upload = (e) =>{
        e.preventDefault()

        if (!nome){
            console.log('Preencha o campo nome')
            return
        }
        else if(!email){
            console.log('Preencha o campo e-mail')
            return
        }
        else if(!cpf){
            console.log('Preencha o campo cpf')
            return
        }
        else if(!dataNascimento){
            console.log('Preencha o campo dataNascimento')
            return
        }
        else if(!celular){
            console.log('Preencha o campo celular')
            return
        }
        else if(!cep){
            console.log('Preencha o campo cep')
        }
    }
    //=================== O FRONT END SE INICIA AQUI ====================
    return (
        <View className="w-screen h-screen bg-white">
            <View>
                <Text className="font-serif">
                    Agora precisamos das suas informações pessoais
                </Text>
                <TextInput 
                placeholder='Nome completo'
                value={nome} 
                onChangeText={e => {
                    setNome(e)
                }}>
                

                </TextInput>
            </View>
        
        </View >
    );
}
