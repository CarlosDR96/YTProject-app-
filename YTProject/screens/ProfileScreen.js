import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { loadFavorites } from '../storage/AsyncStorageHelper';
import NavBar from '../components/NavBar';
import TouchableCard from '../components/TouchableCard';

const ProfileScreen = ({ route, navigation }) => {
  const { restaurants } = route.params; // Obtén restaurants de route.params
  const [favoriteVideos, setFavoriteVideos] = useState([]);
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoritesData = await loadFavorites();
       
        console.log('VIDEOS LIST FINAL: ', restaurants);
        // Verifica que restaurants esté definido antes de usarlo
        let aux = [];
       
        restaurants.forEach(video => {
         
          favoritesData.forEach(fav => {
            if (fav === video.id)
              aux.push(video);
            });
        });
         console.log('Favorites Final:', aux);

        setFavoriteVideos(aux);

      } catch (error) {
        console.error('Error al cargar favoritos:', error);
      }
    };

    fetchFavorites();
  }, []);




  const onPress = () => {
    navigation.navigate('Details');
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile Screen</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {favoriteVideos.length > 0 ? (
          favoriteVideos.map((video, index) => (
            <View key={index} style={styles.videoItem}>
              <TouchableCard
                onPress={onPress}
                key={index}
                title={video.Title}
                tags={video.Tags}
                desc={video.Address}
                sourceImg="https://media-cdn.tripadvisor.com/media/photo-s/1b/90/21/e9/entrada-principal-del.jpg"
              />
            </View>
          ))
        ) : (
          <Text>No favorite videos available</Text>
        )}
      </ScrollView>
      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 0,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  videoItem: {
    marginBottom: 0,
    padding: 0,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
