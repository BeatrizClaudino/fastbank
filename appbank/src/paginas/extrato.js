import axios from 'axios';
import React, { Component, useEffect } from 'react';
import { View } from 'react-native/types';

const ip = "192.168.0.104:8000"

export default function Extrato({navigation}) {
    const [extrato, setExtrato] = useState([])

    useEffect(() => {
        const testar = async () => {
          try {
            const token = await AsyncStorage.getItem("token");
            const tokenRefresh = JSON.parse(token).refresh
            axios.post(`http://${ip}/auth/jwt/refresh`, { refresh: tokenRefresh }) // DAR O REFRESH
              .then((res) => {
                const tokenAccess = res.data.access
                const testeToken = {
                  headers: {
                    Authorization: `JWT ${tokenAccess}`
                  },
                }
                .then(res =>{
                   axios.get(`http://${ip}/app/movimentacao/`, testeToken)
                   setExtrato(res.data)
                   alert(extrato)
                })
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
    return(
        <View>
            <Text>Extrato</Text>
            <Text>Suas movimentações foram carregadas</Text>
            <View>
                {extrato.map((item) =>
                <View>
                    {/* <Text>{item.}</Text> */}
                </View>
                )}
            </View>
        </View>
    )
}