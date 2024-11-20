import React, { useRef, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { api_url, headers } from '../variables';
import { Form } from '@unform/mobile';

export default function CadLogin({ navigation }) {
  const formRef = useRef(null);
  const [FormValues, setFormValues] = useState([]);

  function handleInputChange(input) {
    setFormValues((prevValues) => ({
      ...prevValues,
      [input.name]: input.value,
    }));
  }

  return (
    <View style={styles.container}>
      <Form ref={formRef} onSubmit={(e) => { Cadastrar() }}>
        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleInputChange({ name: "nome", value: e })}
          value={FormValues.nome ? FormValues.nome : ""}
          name="Nome"
          placeholder="Digite seu nome"
          secureTextEntry={false}
        />
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleInputChange({ name: "email", value: e })}
          value={FormValues.email ? FormValues.email : ""}
          name="Email"
          placeholder="Digite seu email"
          secureTextEntry={false}
        />
        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => handleInputChange({ name: "pass", value: e })}
          value={FormValues.pass ? FormValues.pass : ""}
          name="senha"
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />

      </Form>
      <Button title="Registrar" onPress={(e) => formRef.current.submitForm()} />
    </View>
  );

  async function Cadastrar() {
    if (FormValues.email && FormValues.pass && FormValues.nome) {

      let dados = FormValues;

      await axios.post(api_url + 'user', dados, {
        headers: headers
      })
        .then((response) => {

          try {
            (async () => {
              if (response.status == 201) {
                console.log("Usuário criado com sucesso!");
                alert('Usuário criado com sucesso!')
                setTimeout(() => { navigation.navigate('LoginPage'); }, 2500);
              } else {
                alert("Erro ao cadastrar");
              }
            })();
          } catch (e) {
            console.log(e)
            setSev("error");
            setRetorno(response.data);
          }
        })
        .catch((error) => {
          alert("Erro ao logar");
        })
    } else {
      alert("Preencha todos os campos");
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});
