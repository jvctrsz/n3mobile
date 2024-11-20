import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Cadastros() {

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text>Lista de Carros</Text>
          <View>
            <Text>Nivus</Text>
            <Text>2021</Text>
            <Text>SUV</Text>
            <Text>Disponibilidade: Sim</Text>
          </View>
      </View>

      <View style={styles.info}>
        <Text>Lista de Clientes</Text>
          <View>
            <Text>Roberto</Text>
            <Text>roberto1247@gmail.com</Text>
            <Text>66995357428</Text>
            <Text>Carro escolhido: Nivus</Text>
          </View>
      </View>

      <View style={styles.buttons}>
        <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    padding: 20,
    gap: 40
  },
  buttons:{
    display: 'flex',
    justifyContent: 'center',
    width: '100%', 
    height: 100,
    padding: 20,
    gap: 10
  },
  info:{
    gap: 10
  }
});
