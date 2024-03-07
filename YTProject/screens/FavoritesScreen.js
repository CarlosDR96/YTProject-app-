import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { loadFavorites } from '../storage/AsyncStorageHelper';
import NavBar from '../components/NavBar';
import TouchableCard from '../components/TouchableCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import styles from '../styles/FavoritesScreenStyles';
import Header from '../components/Header';
import logo from '../img/SezarBlueLogo.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FavoritesScreen = ({ route, navigation }) => {
  const { restaurants } = route.params; // Obté restaurants de route.params
  const [favoriteVideos, setFavoriteVideos] = useState([]);
  const [tagsList, setTagsList] = useState([]);

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

        const tagsCol = collection(db, "Tags");
        const tagsSnapshot = await getDocs(tagsCol);
        const tagsListData = tagsSnapshot.docs.map(doc => doc.data());
        setTagsList(tagsListData[0].Values);

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
        <View style={styles.header}>
            <Header imageSource={logo} />
        </View>
        <Text style={styles.text1}>Favorites</Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {favoriteVideos.length > 0 && tagsList? (
            favoriteVideos.map((video, index) => (
            <View key={index} style={styles.videoItem}>
                <TouchableCard
                    onPress={onPress}
                    key={index}
                    title={video.Title}
                    tags={video.Tags}
                    tagsList={tagsList}
                    desc={video.Address}
                    sourceImg={video.Youtube}
                />
            </View>
            ))
        ) : (
        <View style={styles.iconContainer}>
            <MaterialIcons name="highlight-off" size={60} color='white' />
            <Text style={styles.text2}>No favorite videos available</Text>
        </View>
        )}
        </ScrollView>
        <NavBar navigation={navigation} />
    </View>
  );
};


export default FavoritesScreen;
