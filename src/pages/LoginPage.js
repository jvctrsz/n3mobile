import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Form } from '@unform/mobile';
import { api_url, headers } from '../variables';

export default function LoginPage({ navigation }) {
  const formRef = useRef(null);
  const [FormValues, setFormValues] = useState([]);

  useEffect(() => {
    (async () => {
      let Token = await AsyncStorage.getItem('@token_').then((data) => {
        return data;
      });

      if (Token) {
        navigation.navigate('Home');
      }
    })();
  }, []);

  function handleInputChange(input) {
    setFormValues((prevValues) => ({
      ...prevValues,
      [input.name]: input.value,
    }));
  }

  return (
    <View style={styles.container}>
      <Form ref={formRef} onSubmit={(e) => { Logar() }}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleInputChange({ name: "email", value: e })}
          value={FormValues.email ? FormValues.email : ""}
          name="User"
          placeholder="Digite o seu email"
          secureTextEntry={false}
        />
        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleInputChange({ name: "pass", value: e })}
          value={FormValues.pass ? FormValues.pass : ""}
          name="senha"
          placeholder="Digite a sua senha"
          secureTextEntry={true}
        />
 
      </Form>
      <View style={styles.buttons}>
        <Button title="Login" onPress={(e) => formRef.current.submitForm()} />
        <Button title="Registrar" onPress={() => navigation.navigate('CadLogin')} />
      </View>
    </View>
  );

  async function Logar() {
    if (FormValues.email && FormValues.pass) {

      await axios.post(api_url + 'user/login', FormValues, {
        headers: headers
      })
        .then((response) => {


          try {
            (async () => {
              if (response.status == 200) {
                response = response.data;

                AsyncStorage.setItem('@token_', response.token);
                AsyncStorage.setItem('@dados_', JSON.stringify(response.user));
                AsyncStorage.setItem('@nomeUser_', response.user.nome);

                setTimeout(() => { navigation.navigate('Home'); }, 2500);

              } else {
                alert("Erro ao logar");
              }
            })();
          } catch (e) {
            console.log(e)
           
          }
        })
        .catch((error) => {
          alert("Erro ao logar");
          
        })
    } else {
      alert("Preencha usuário e senha")
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  input: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    padding: 20,
    gap: 10
  }
});