import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import Botao from '../componentes/Button';
import axios, { Axios } from 'axios';
// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CaixaInput from '../componentes/CaixaInput';

export const ip = "10.109.72.7:8000"

export default function Login({ navigation }) {
  //CONSTANTES UTILIZADAS NO DECORRER DO PROJETO E SÃO DADOS OBRIGATÓRIOS NO INPUT PELO USUÁRIO
  const [cpf, setCpf] = useState('48066287860')
  const [senha, setSenha] = useState('Re@ct122')
  const [token, setToken] = useState('')

  //PARA REALIZAR O UPLOAD TODAS AS CONDIÇÕES DEVEM SER ATENDIDAS
  const login = () => {
    if (!cpf) {
      Alert.alert('Preencha o campo cpf')
      return
    }
    else if (cpf.length < 11) {
      Alert.alert('CPF inválido!')
    }
    else if (!senha) {
      Alert.alert('Preencha o campo senha')
    }
    else {

      axios.get(`${ip}/auth/users/?cpf=${cpf}`)
      .then((resposta) =>{
        console.log("TA ENTRANDOOOOOOO")
        if (resposta.data.password != senha){
          console.log(resposta.data)
          resposta.data.tentativas += 1
          console.log(resposta.data.tentativas)
          console.log(resposta.data)
          axios.put(`${ip}/auth/users/?cpf=${cpf}/`, resposta.data)
          
        }else{
          enter()
        }
      })
    }
  }

  const enter = async () => {
    const resposta = axios.post(`http://${ip}/auth/jwt/create/`, {
      cpf: cpf,
      password: senha,
      
    }).then((resposta) => {
      if (resposta.data.access == undefined){
        //senha incorreta
        
      }
      else{

      }
      setToken(resposta.data.acess)
      AsyncStorage.setItem('token', JSON.stringify(resposta.data))
      navigation.navigate('Home')
    }).catch((erro) => {
      Alert.alert(erro + "errinho")
    })
  }

  //=================== O FRONT END SE INICIA AQUI ====================
  return (
    <View className="w-screen h-screen bg-white">
      <View className="pt-24 flex-1 items-center">
        <View className="flex text-center items-center justify-center w-[80%]">
          <Text className="text-[24px] text-[#4a1374] pb-14">
            Faça seu Login
          </Text>
        </View>
        <CaixaInput texto="CPF" placeholder="000.000.000-00" tipoTeclado="phone-pad" onChangeText={(e) => setCpf(e)} />
        <CaixaInput texto="Senha" placeholder="Digite a sua senha" tipoTeclado="default" onChangeText={(e) => setSenha(e)} />
        <Text className="text-[15px] pb-12">
          <View>
          <TouchableOpacity>
              <Text className="text-[#5203FB]">
                Esqueci a minha senha
              </Text>
          </TouchableOpacity>
          </View>
        </Text>
        <Botao evento={() => login()} nomeBotao={"Entrar"} />
      </View>
    </View>
  );
}