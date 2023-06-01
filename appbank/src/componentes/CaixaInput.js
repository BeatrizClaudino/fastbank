import { View, Text, TextInput } from 'react-native';

const CaixaInput = props => {

  return (
    <View className="flex items-center w-[100%] pb-16">
      <View className="w-[90%]">
        <Text className="text-[20px] text-[#494B53]">{props.texto}</Text>
        <TextInput className="w-[100%] text-[17px] h-14 border-b-2 border-[#D9D6E2] focus:outline-none focus:border-blue-900"
          placeholder={props.placeholder}
          keyboardType={props.tipoTeclado}
          value={props.valor}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );

};
export default CaixaInput;  