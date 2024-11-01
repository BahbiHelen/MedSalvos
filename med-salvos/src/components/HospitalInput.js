import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function HospitalInput({ onAddHospital }) {
  const [enteredHospital, setEnteredHospital] = useState('');

  const hospitalInputHandler = (enteredText) => {
    setEnteredHospital(enteredText);
  };

  const addHospital = () => {
    onAddHospital(enteredHospital);
    setEnteredHospital('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Digite o nome do hospital"
        style={styles.input}
        onChangeText={hospitalInputHandler}
        value={enteredHospital}
      />
      <TouchableOpacity style={styles.button} onPress={addHospital}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 35,
    borderColor: '#6A0DAD',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 14,
    color: '#6A0DAD',
  },
  button: {
    backgroundColor: '#6A0DAD',
    borderRadius: 20, // Aumentando a arredondação
    paddingVertical: 10, // Ajuste para a altura do botão
    paddingHorizontal: 15,
    marginLeft: 10,
    justifyContent: 'center', // Centraliza o texto
  },
  buttonText: {
    color: '#FFFFFF', // Cor do texto do botão
    fontSize: 16,
    textAlign: 'center', // Centraliza o texto no botão
  },
});
