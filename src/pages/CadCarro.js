import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CadCarro({ navigation }) {
 
  return (
    <View style={styles.container}>
      <Text>Nome do Carro</Text>
      <TextInput style={styles.input}/>
      <Text>Ano</Text>
      <TextInput style={styles.input}/>
      <Text>Modelo</Text>
      <TextInput style={styles.input} />
      <Text>Disponibilidade (Sim ou Não)</Text>
      <TextInput style={styles.input} />
      <View style={styles.buttons}>
        <Button title="Cadastrar"/>
        <Button title="Voltar" onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  buttons:{
    display: 'flex',
    justifyContent: 'center',
    width: '100%', 
    height: 100,
    padding: 20,
    gap: 10
  }
});
