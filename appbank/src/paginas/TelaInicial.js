import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { View, Image, Text} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TelaInicial({ navigation }){
    return(
        <View className="w-full h-full ">
          <ImageBackground className="flex  w-full h-full" source={require('../../assets/moca.jpg')} >
            <View className="w-full h-full flex  items-center justify-end ">
                <TouchableOpacity onPress={() => navigation.navigate("Cadastro")} className="rounded-lg bg-slate-300 blur-2xl border-2 border-white w-[50vw] h-[8vh] flex items-center justify-center">
                    <Text className="text-[20px]">
                        Quero ser cliente
                    </Text>
                    
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Login")} className="pb-8 pt-5">
                    <Text className="text-white text-[14px]">
                        Já possuo conta
                    </Text> 
                </TouchableOpacity>
              
              
            </View>
          </ImageBackground>
        </View>
    )
}