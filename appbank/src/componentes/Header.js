import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import olhoAberto from '../../assets/eye.png'
import olhoFechado  from '../../assets/closeeye.png'
import { LinearGradient } from 'expo-linear-gradient';

const Header1 = props =>{
    
    return (
        <LinearGradient className="h-52" colors={['#6300B0', '#021249']}>
        <View className="p-5 flex flex-row space-x-28">
            <View className="flex flex-row">
                <Image source={require('../../assets/User.png')} />
                <Text className="text-cyan-50 pt-6 pl-2 text-[15px]">Hello user</Text>
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
            <View className="flex justify-center pl-8 bg-white w-[90%] h-14 rounded-lg">
                <Text>Saldo em conta</Text>
                <Text>{exibirSaldo ? saldo : "****" }</Text>
            </View>
        </View>
        </LinearGradient>

    )
}
export default Header1