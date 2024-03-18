import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import { Audio } from 'expo-av';
import VideoManager from '../utils/VideoManager'

const SplashScreen = () => {
  const navigation = useNavigation();
  const [randomText, setRandomText] = useState('');
  const heartBeatAnimation = new Animated.Value(1);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const textArray = [
    'Nos vamos para dentro a ver qué se cuece',
    'Tengo un hambre que da calambre, que empiece el papeo',
    'Fairy de pan', 'Me va a dar un Camilo Sesto', '¡Ahí va, qué rico!', 'Carta vista para sentencia',
  ];

  const chooseRandomText = () => {
    const randomIndex = Math.floor(Math.random() * textArray.length);
    setRandomText(textArray[randomIndex]);
  };

  useEffect(() => {
    VideoManager.loadVideosData();
    VideoManager.loadTagsData();
    VideoManager.loadPollsData();

    const loadFonts = async () => {
      await Font.loadAsync({
        peanut: require('../assets/fonts/PeanutDonuts.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
    
    chooseRandomText(); // Escoge un texto aleatorio al renderizar

    const timer = setTimeout(() => {
      // Navegar a la pantalla Home después de x segundos
      console.log('go to home')
      navigation.navigate('Home');
    }, 8000); // segundos en milisegundos

    if (fontsLoaded) {
      chooseRandomText();

      Animated.loop(
        Animated.sequence([
          Animated.timing(heartBeatAnimation, {
            toValue: 1.2,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(heartBeatAnimation, {
            toValue: 1,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();

      const playIntroAudio = async () => {
        const { sound } = await Audio.Sound.createAsync(
          require('../assets/intro.mp3')
        );
        await sound.playAsync(); // Reproduce el audio

        // Detén la reproducción después de 8 segundos
        setTimeout(async () => {
          await sound.stopAsync();
          navigation.navigate('Home');
        }, 8000);
      };

      playIntroAudio();
    }
  }, [navigation, heartBeatAnimation, fontsLoaded]);

  const randomRotation = Math.random() * 10 - 5;

  const animatedStyle = {
    transform: [
      {
        scale: heartBeatAnimation,
      },
      {
        rotate: `${randomRotation}deg`,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../img/SplashScreen.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {fontsLoaded && (
        <Animated.View style={[styles.textContainer, animatedStyle]}>
          <Text style={styles.text}>{randomText}</Text>
        </Animated.View>
      )}
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
    bottom: 190,
    left: 0,
    right: 0,
    padding: 15,
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#FFFFFF',
    fontFamily: 'peanut',
    marginBottom: 50,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});

export default SplashScreen;
