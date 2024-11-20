import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/pages/LoginPage';
import CadCarro from './src/pages/CadCarro';
import CadCliente from './src/pages/CadCliente';
import CadLogin from './src/pages/CadLogin';
import Cadastros from './src/pages/Cadastros'
import Home from './src/pages/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="CadLogin" component={CadLogin} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadCarro" component={CadCarro} />
        <Stack.Screen name="CadCliente" component={CadCliente} />
        <Stack.Screen name="Cadastros" component={Cadastros} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}