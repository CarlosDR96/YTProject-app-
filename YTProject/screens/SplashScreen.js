// SplashScreen.js
import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import VideoManager from '../utils/VideoManager'

const SplashScreen = () => {
  const navigation = useNavigation();
  const [randomText, setRandomText] = useState('');
  const [sound, setSound] = useState();
  
  // Array de textos
  const textArray = [
    'Nos vamos para dentro a ver qué se cuece',
    'Tengo un hambre que da calambre, que empiece el papeo',
    'Fairy de pan', 'Me va a dar un Camilo Sesto', '¡Ahí va, qué rico!', 'Carta vista para sentencia',
  ];

  // Función para escoger un texto aleatorio
  const chooseRandomText = () => {
    const randomIndex = Math.floor(Math.random() * textArray.length);
    setRandomText(textArray[randomIndex]);
  };

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('../assets/intro.mp3'))
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  // Efecto secundario para cambiar a HomeScreen después de x segundos
  useEffect(() => {
    //VideoManager.loadData();
    VideoManager.loadVideosData();
    VideoManager.loadTagsData();
    VideoManager.loadPollsData();

    playSound();
    chooseRandomText(); // Escoge un texto aleatorio al renderizar

    const timer = setTimeout(() => {
      // Navegar a la pantalla Home después de x segundos
      console.log('go to home')
      navigation.navigate('Home');
    }, 8000); // segundos en milisegundos

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Imagen que ocupa toda la pantalla */}
      <Image
        source={require('../img/SplashScreen.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Texto en el centro */}
      <View style={styles.textContainer}>
        <Text style={[styles.text, { fontWeight: 'bold' }]}>{randomText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  textContainer: {
    position: 'absolute',
    bottom: 310,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: '#F4F1BB',
    textAlign: 'center',
  },
});

export default SplashScreen;
