import React, { Component, useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown'
import Botao from '../componentes/Button';
import CaixaTexto from '../componentes/CaixaInput'

export default function Pix({ navigation }) {
    const [pix, setPix] = useState('')
    const [selectedItem, setSelectedItem] = useState()
    const opcoes = ["Número da conta", "CPF", "Telefone"]

    // function verificar(){
    //     if (selectedItem == 0){
    //         <CaixaTexto placeholder="aaaaaaaaaaa"/>
    //     }
    // }
    return (
        <SafeAreaView className="flex-1 bg-white items-center">
            <View className="w-[94%] items-center">
                <Text className="text-[4vh] h-14">Área pix</Text>
                <Text className="text-[2vh] text-justify pt-6">Transfira dinheiro de forma instantânea, segura e sem complicação. Sem taxas extras e sem pagar nada por isso</Text>
                <View className="pt-14">
                <SelectDropdown
                    data={opcoes}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    //Aqui ele retorna o item selecionado 
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    //Aqui ele retorna todas as opções
                    rowTextForSelection={(item, index) => {
                        return item

                    }}/>
                </View>
                <View>
                    
                </View>
                <Botao evento={"AAAAAA"} nomeBotao={"Entrar"} />
            </View>
        </SafeAreaView>
    )
}