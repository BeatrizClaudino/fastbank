import React, { useEffect, useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Botao from '../componentes/Button';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ip = "10.109.72.7:8000"

const showAlert = () => {
  Alert.alert('Sucesso', 'Empréstimo realizado com sucesso!', [
    { text: 'OK', onPress: () => console.log('OK Pressed') }
  ]);
};
export default function Emprestimo({ route, navigation}) {
  // const { user } = useSession(navigation);
  const { valor } = route.params
  const aprovado = false
  const [token, setToken] = useState();
  const [parcelas, setParcelas] = useState(1);
  const [custoParcela, setCustoParcela] = useState(0);
  const [valorTotalJuros, setValorTotalJuros] = useState(0)

  const taxa = 5 / 100

  //Não pode colocar o mesmo nome da variavel na const
  const atualizarCustoParcela = (parcelas) => {
    var taxaParcelas = (valor / parcelas) * taxa
    var valorComJuros = (taxaParcelas * parcelas) + (valor / parcelas)
    var valorformatado = parseFloat(valorComJuros).toFixed(2);
    var valortotal = parseFloat(valorformatado * parcelas)
    setCustoParcela(valorformatado);
    setValorTotalJuros(valortotal)
  };

  const [header, setHeader] = useState({})

  useEffect(() => {
    const testar = async () => {
      try {
        console.log('entrou')
        const token = await AsyncStorage.getItem("token");
        const tokenJSON = JSON.parse(token);
        const acessToken = tokenJSON.access;
        console.log(acessToken)
        axios.post(`http://${ip}/auth/jwt/refresh`, { refresh: tokenJSON.refresh }) // DAR O REFRESH
          .then((res) => {
            const tokenAccess = res.data.access
            const testeToken = {
              headers: {
                Authorization: `JWT ${tokenAccess}`
              },
            }
            setHeader(testeToken)
          }
          ).catch((erro) => {
            console.log('entrou4');
            console.log('errooioioioio', erro)
          })
      }
      catch {
        console.log('se ferrou otário')
      }
    }
    testar();
  }, [])

  const enviarEmprestimo = () => {
    axios.post(`http://${ip}/app/emprestimo/`, {
      valorSolicitado: valor,
      juros: taxa,
      aprovado: true,
      valorTotalJuros: valorTotalJuros,
      valorParcelaJuros: custoParcela,
      fk_conta_emprestimo: 1
    }, header).then((resposta) => {
      setToken(resposta.data.acess)
      AsyncStorage.setItem('token', JSON.stringify(resposta.data))
      showAlert()
      navigation.navigate('Home')
    }).catch((erro) => {
      Alert.alert(erro + "errinho")
    })
  }

  return (
    <View className="w-full h-full bg-white">
      <View className=" justify-center items-center text-center">
        <Text className="text-[24px] text-[#4a1374] mb-4">Solicitar Empréstimo</Text>
        <Text className="text-[20px] pt-12">
          Empréstimo solicitado: R${valor},00
        </Text>
        <View className="">
          <Text className="text-[20px]">Selecione a quantidade de parcelas:</Text>
          <Picker
            selectedValue={parcelas}
            onValueChange={(itemValue) => {
              atualizarCustoParcela(itemValue);
              setParcelas(itemValue);
            }}
          >
            <Picker.Item label="Select the value" />
            <Picker.Item label="1x" value={1} />
            <Picker.Item label="2x" value={2} />
            <Picker.Item label="3x" value={3} />
            <Picker.Item label="4x" value={4} />
            <Picker.Item label="5x" value={5} />
            <Picker.Item label="6x" value={6} />
          </Picker>
        </View>
        <Text className="text-[18px]">Serão {parcelas} parcela(s) de {custoParcela}</Text>

        <Botao evento={() => enviarEmprestimo()} nomeBotao={"Confirmar solicitação"} />
      </View>
    </View>
  );
};