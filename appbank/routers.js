import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//===== PRECISA FAZER O DOWNLOAD =====
import { Feather } from '@expo/vector-icons'
import Home from './src/paginas/Home'
import Transferencia from './src/paginas/Transferencia'
import Login from './src/paginas/Login'
import Cadastro from './src/paginas/Cadastro'
import Pix from "./src/paginas/Pix";
import Emprestimo from './src/paginas/Emprestimo';
import Valor from './src/componentes/Valor';
import TelaInicial from './src/paginas/TelaInicial';

const Nav = createBottomTabNavigator()
const Pilha = createStackNavigator()

function NavBar() {
    return (
        <Nav.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor:"#ffff",
                    borderTopColor: 'transparent',
                    paddingBottom: 1,
                    paddingTop: 1,
                },
                tabBarActiveTintColor: '#f0f',
                tabBarInactiveTintColor: '#555',
            }}>
            <Nav.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="home" size={size} color={color} />
                    )
                }}
            />
            <Nav.Screen name="Transferências" component={Transferencia} />
        </Nav.Navigator>
    )
}
export default function Routers({ navigation }) {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
            <Pilha.Screen
                name="TeleInicial"
                component={TelaInicial}
                options={{ title: false, headerShown: false }}
            />
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ title: false }}
                />
                <Pilha.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ title: false }}
                />
                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ title: false, headerShown: false }}
                />
                <Pilha.Screen
                    name="Emprestimo"
                    component={Emprestimo}
                    options={{ title: false, headerShown: true }}
                />
                <Pilha.Screen
                    name="NavBar"
                    component={NavBar}
                    options={{ title: false, headerShown: false }}
                />
                <Pilha.Screen
                    name="Pix"
                    component={Pix}
                    options={{ title: false, headerShown: true }}
                />
                <Pilha.Screen
                    name="Valor"
                    component={Valor}
                    options={{ title: false, headerShown: true }}
                />
                <Pilha.Screen
                    name="Transferencia"
                    component={Transferencia}
                    options={{ title: false, headerShown: true }}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}
