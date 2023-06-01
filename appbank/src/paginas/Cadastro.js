import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, Alert, ScrollView } from 'react-native';
import Botao from '../componentes/Button';
import axios, { Axios } from 'axios';
export const ip = "10.109.72.7:8000"
import CaixaInput from '../componentes/CaixaInput';


export default function Cadastro({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [token, setToken] = useState('');
  const [passo, setPasso] = useState(1);

 
  const showAlert = () => {
      Alert.alert('Sucesso', 'Conta criada com sucesso!', [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ]);
    };

  //PARA REALIZAR O UPLOAD TODAS AS CONDIÇÕES DEVEM SER ATENDIDAS
  const upload = () => {
    if (!nome) {
      Alert.alert('Preencha o campo nome')
      return
    }
    else if (!datanascimento) {
      Alert.alert('Preencha o campo dataNascimento')
      return
    }
    else {   
      setPasso(2)
    }
  }
  const upload2 = () => {
    if (!cpf) {
      Alert.alert('Preencha o campo cpf')
    }
    else if (cpf.length < 11) {
      Alert.alert('CPF inválido')
    }
    else {
      setPasso(3)
    }
  }
  const upload3 = () => {
    if (!email) {
      Alert.alert('Preencha o campo e-mail')
    }
    else if (!telefone) {
      Alert.alert('Preencha o campo celular')
    }
    else {
      setPasso(5)
    }
  }
  const upload4 = () => {
    if (!senha) {
      Alert.alert('Preencha o campo senha')
    }
    else if (senha.length < 8) {
      Alert.alert('Senha inválida, digite 8 números')
    }
    else if (confirmarSenha.length < 8) {
      Alert.alert('As senhas não conferem')

    }
    else if (confirmarSenha != senha) {
      Alert.alert('As senhas não conferem')
    }
    else {
      criarConta()
      
    }
  }

  const criarConta = () => {
    var data = datanascimento.split('/')
    let dataCorreta = data[2] + "-" + data[1] + "-" + data[0] 
    axios.post(`http://${ip}/auth/users/`,
    
      {
        nome: nome,
        email: email,
        cpf: cpf,
        data_nascimento: dataCorreta,
        celular: telefone,
        password: senha
      })
      .then((res) => {
        axios.post(`http://${ip}/auth/jwt/create`, {
          cpf:cpf,
          password:senha
        }).then((res) =>{
          setToken(JSON.stringify(res.data))

          showAlert()
          navigation.navigate("Login")
        })
      }).catch((err) => {
        console.error(err)
      })
  }
  return (
    <>
      {passo == 1 ?
      <ScrollView className="flex-1 bg-white">
          <View className="pt-16 flex-1 items-center">
            <View className="flex text-center items-center justify-center w-[100%]">
              <Text className="text-[24px] text-[#4a1374] pb-14">
                Crie sua conta!
              </Text>
              <Text className="text-[16px] w-[90%] pb-14 text-[#5a5d68] text-justify">
                Para iniciarmos precisaremos do seu CPF, e lembrando, caso seja menor de idade preencha com os dados de um responsável.
              </Text>
            </View>
            <View className="flex w-[100%] items-center">
            <CaixaInput texto="Nome" placeholder="Digite o seu nome completo" tipoTeclado="default" onChangeText={(e) => setNome(e)} />
            <CaixaInput texto="Data de nascimento" placeholder="dd/mm/yyyy" tipoTeclado="phone-pad" onChangeText={(e) => setDatanascimento(e)} />
              <Botao evento={() => upload()} nomeBotao={"Continuar"} />
            </View>
          </View>
        </ScrollView>
        :
        passo == 2 ?
          <ScrollView className="flex-1 bg-white">
            <View className="w-full pt-20 flex-1 items-center">
                <Text className="text-[24px] text-[#5a5d68] pb-12">
                  Agora precisamos do seu CPF
                </Text>
                <Text className="text-[16px] pb-12 pt-9 w-[92%] text-[#5a5d68] text-justify">
                Digite seu CPF com segurança. Somos um banco confiável e protegemos suas informações pessoais 
                </Text>
              </View>
              <View className="flex w-[100%] items-center">
              <CaixaInput texto="CPF" placeholder="000.000.000-00" tipoTeclado="phone-pad" onChangeText={(e) => setCpf(e)} />
                <Botao evento={() => upload2()} nomeBotao={"Continuar"} />
              </View>

            </ScrollView>
          :
          passo == 3 ?
          <ScrollView className="flex-1 bg-white ">
            <View className="flex items-center">
              <View className="w-[90%] pt-16">
                  <Text className="text-[24px] text-[#5a5d68] pb-12 text-center">
                    Em qual telefone e e-mail podemos falar com você?
                  </Text>
                  <Text className="text-[15px] pb-12 text-[#5a5d68] text-justify">
                    Será utilizado para informar sobre suas transações e novidades do nosso banco.
                  </Text>
                </View>
                <View className="flex w-screen items-center">
                <CaixaInput texto="E-mail" placeholder="digite o seu e-mail" tipoTeclado="default" onChangeText={(e) => setEmail(e)} />
                <CaixaInput texto="Telefone" placeholder="(00) 00000-0000" tipoTeclado="default" onChangeText={(e) => setTelefone(e)} />
                  <Botao evento={() => upload3()} nomeBotao={"Continuar"} />
                </View>
                </View>
            </ScrollView>
            :
            passo == 5 ?
            <ScrollView className="flex-1 bg-white ">
                <View className="w-full pt-10 flex-1 items-center">
                  <View className="flex text-center items-center justify-center w-[90%]">
                    <Text className="text-[24px] text-[#5a5d68] pb-12">
                      Estamos quase lá! Crie a sua senha.
                    </Text>
                    <Text className="text-[15px] pb-12 text-[#5a5d68] text-justify">
                      Lembrando que a senha precisa conter 8 números e números sortidos.
                    </Text>
                  </View>
                  <View className="flex w-[100%] items-center">
                  <CaixaInput texto="Senha" placeholder="digite a sua senha" tipoTeclado="default" onChangeText={(e) => setSenha(e)} />
                  <CaixaInput texto="Confirme sua senha" placeholder="digite novamente a sua senha" tipoTeclado="default" onChangeText={(e) => setConfirmarSenha(e)} />
                    <Botao evento={() => upload4()} nomeBotao={"Finalizar Cadastro"} />
                  </View>
                </View>
              </ScrollView>
              :
              null
            }
    </>

  )
}
