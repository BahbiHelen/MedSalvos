import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importando a biblioteca de ícones
import HospitalInput from './src/components/HospitalInput';

export default function App() {
  const [hospitals, setHospitals] = useState([
    {
      id: '1',
      name: 'Hospital Regional de Ferraz de Vasconcelos',
      images: [
        require('./assets/SaoMarcos01.png'), // Imagem principal no lado esquerdo
        require('./assets/SaoMarcos02.png'),
        require('./assets/SaoMarcos03.png'),
      ],
    },
    {
      id: '2',
      name: 'Santo Antônio Centro Médico',
      images: [
        require('./assets/SantoAntonio01.png'),
        require('./assets/SantoAntonio02.png'),
        require('./assets/SantoAntonio03.png'),
      ],
    },
  ]);

  const addHospitalHandler = (hospitalName) => {
    setHospitals((currentHospitals) => [
      ...currentHospitals,
      { id: Math.random().toString(), name: hospitalName, images: [] }, // Adiciona um ID único
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Botão de seta no canto superior esquerdo */}
      <TouchableOpacity style={styles.backButton} onPress={() => alert('Voltar')}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Imagem do sino no canto superior direito */}
      <TouchableOpacity style={styles.bellButton} onPress={() => alert('Notificações')}>
        <Image source={require('./assets/Sino.png')} style={styles.bellImage} />
      </TouchableOpacity>

      <Text style={styles.title}>Locais Salvos</Text>
      <Text style={styles.subTitle}>Você tem {hospitals.length} locais salvos até o momento</Text>
      <HospitalInput onAddHospital={addHospitalHandler} />
      <FlatList
        data={hospitals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.hospitalContainer}>
            <Text style={styles.hospitalName}>• {item.name}</Text>
            <View style={styles.imagesContainer}>
              <Image source={item.images[0]} style={styles.mainImage} />
              <View style={styles.sideImagesContainer}>
                <Image source={item.images[1]} style={styles.sideImage} />
                <Image source={item.images[2]} style={styles.sideImage} />
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.pageIndicatorContainer}>
        <View style={[styles.pageIndicator, styles.pageIndicatorInactive]} />
        <View style={[styles.pageIndicator, styles.pageIndicatorActive]} />
        <View style={[styles.pageIndicator, styles.pageIndicatorInactive]} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  bellButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  bellImage: {
    width: 24, // Ajuste o tamanho conforme necessário
    height: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 16,
    color: '#6A0DAD',
    textAlign: 'center',
    marginBottom: 20,
  },
  hospitalContainer: {
    marginBottom: 20,
  },
  hospitalName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainImage: {
    width: '65%',
    height: 150,
    borderRadius: 10,
  },
  sideImagesContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '30%',
  },
  sideImage: {
    width: '100%',
    height: 70,
    borderRadius: 10,
    marginBottom: 10,
  },
  pageIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#6A0DAD',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  pageIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  pageIndicatorActive: {
    backgroundColor: '#fff',
  },
  pageIndicatorInactive: {
    backgroundColor: '#B8A9C9',
  },
});
