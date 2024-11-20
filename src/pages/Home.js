import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App</Text>
      
      <View style={styles.buttons}>
        <Button 
          title="Cadastro de Carros"
          onPress={() => navigation.navigate('CadCarro')}
        />
        
        <Button
          title="Cadastro de Clientes"
          onPress={() => navigation.navigate('CadCliente')}
        />
        
        <Button
          title="Cadastros"
          onPress={() => navigation.navigate('Cadastros')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    width: 300, 
    height: 300,
    padding: 20,
    gap: 10
  },
});