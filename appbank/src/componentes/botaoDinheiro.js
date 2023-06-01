import React, { useState } from 'react';
import {Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

export default function BotaoDinheiro({evento, valor}) { 
    return(
        <View className="flex w-screen flex-row ">
            <TouchableOpacity className="flex flex-row bg-[#230565] cursor-pointer h-8 w-20" onPress={evento}>
                <Text className="text-slate-50 text-[22px]">{valor}</Text>
            </TouchableOpacity>
        </View>
    )
}