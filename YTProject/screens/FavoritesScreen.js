import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { loadFavorites } from '../storage/AsyncStorageHelper';
import NavBar from '../components/NavBar';
import TouchableCard from '../components/TouchableCard';
import styles from '../styles/FavoritesScreenStyles';
import Header from '../components/Header';
import logo from '../img/SezarBlueLogo.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import VideoManager from '../utils/VideoManager';

const FavoritesScreen = ({ route, navigation }) => {
  const { restaurants } = route.params; // Obtén restaurants de route.params
  const [favoriteVideos, setFavoriteVideos] = useState([]);
  const [tagsList, setTagsList] = useState([]);
  const [videosList, setVideosList] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para indicar si los favoritos se están cargando

  const recieveVideoData = (data) => {
    setVideosList(data);
  };
  
  const recieveTagsData = (data) => {
    setTagsList(data);
  };

  useEffect(() => {
    VideoManager.subscribe(recieveVideoData, 1); 
    VideoManager.subscribe(recieveTagsData, 2);
    const fetchFavorites = async () => {
      try {
        const favoritesData = await loadFavorites();
        //console.log('VIDEOS LIST FINAL: ', restaurants);
        let aux = [];
        videosList.forEach(videoData => {
          favoritesData.forEach(fav => {
            if (fav === videoData.id) {
              aux.push(videoData);
            }
          });
        });
      //  console.log('Favorites Final:', aux);
        setFavoriteVideos(aux);

        setLoading(false); // Marcar que los favoritos se han cargado
      } catch (error) {
        console.error('Error al cargar favoritos:', error);
      }
    };
    fetchFavorites();
  }, [videosList]); // Asegurarse de que la carga de favoritos se vuelva a hacer si cambia la lista de videos

  const onPress = (videoData) => {
    navigation.navigate('Details', { videoData });
  };
  

  return (
    <View style={styles.container}>
      <Header imageSource={logo} />
      <Text style={styles.text1}>Favoritos</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {favoriteVideos.length > 0 && tagsList ? (
          favoriteVideos.map((videoData, index) => (
            <View key={index} style={styles.videoItem}>
              <TouchableCard
              onPress={() => onPress(videoData)} // Pasar videoData al hacer clic
              key={index}
              title={videoData.Title}
              tags={videoData.Tags}
              tagsList={tagsList}
              desc={videoData.Address}
              sourceImg={videoData.Youtube}
            />

            </View>
          ))
        ) : (
          <View style={styles.iconContainer}>
            <MaterialIcons name="highlight-off" size={60} color='white' />
            <Text style={styles.text2}>No hay vídeos favoritos disponibles</Text>
          </View>
        )}
      </ScrollView>
      <NavBar navigation={navigation} />
    </View>
  );
};

export default FavoritesScreen;
