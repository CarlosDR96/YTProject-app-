import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableWithoutFeedback, Modal, TouchableOpacity } from 'react-native';
import logo from '../img/SezarBlueLogo.png';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Tags from '../components/Tags';
import YoutubeVideo from '../components/YoutubeVideo';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import CarouselDef from '../components/CarouselDef';
import VideoManager from '../utils/VideoManager';
import { saveFavorites, loadFavorites, resetVariable } from '../storage/AsyncStorageHelper'; // Importa tus funciones AsyncStorageHelper

const DetailsScreen = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { params } = route;
  const videoData = params ? params.videoData : null;
  const [tagsList, setTagsList] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isFavPressed, setIsFavPressed] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [videosList, setVideosList] = useState([]);

  const handleFavPress = async () => {
    if (isFavPressed) {
      // Si ya está marcado como favorito, lo eliminamos solo del array de favoritos
      const updatedFavorites = favorites.filter((favId) => favId !== videoData.id);
      await saveFavorites(updatedFavorites);
      setIsFavPressed(false);
    } else {
      // Si no está marcado, lo agregamos
      const newFavorites = [...favorites, videoData.id]; // Suponiendo que videoData tiene un campo id
      await saveFavorites(newFavorites);
      setIsFavPressed(true);
    }
  };

  const recieveVideoData = (data) => {
    setVideosList(data);
  };

  const recieveTagsData = (data) => {
    setTagsList(data)
  }
  

  // Función para cargar favoritos al montar el componente
  useEffect(() => {
    VideoManager.subscribe(recieveVideoData, 1);
    VideoManager.subscribe(recieveTagsData, 2);
    const fetchFavorites = async () => {
      const loadedFavorites = await loadFavorites();
      setFavorites(loadedFavorites);
      // Verifica si el video actual está en favoritos y establece el estado en consecuencia
      setIsFavPressed(loadedFavorites.includes(videoData.id));
    };
    fetchFavorites();
  }, []);

  // Crear un nuevo array de tags filtrados basados en las posiciones en videoData.Tags
  const filteredTags = videoData.Tags.map((tagIndex) =>
    tagsList && tagsList.length > tagIndex ? tagsList[tagIndex] : null
  );

  const handleImagePress = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalContent}>
              <Image
                source={{ uri: videoData.Images[activeSlide].imageUrl }}
                style={styles.modalImage}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>

      <Header imageSource={logo} />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{videoData.Title}</Text>
        </View>
        <Text style={styles.detailText}>{videoData.Restaurant}</Text>
        <Text style={styles.detailText}>{videoData.Address}</Text>
        <Text style={styles.detailText}>{videoData.Youtube}</Text>
        <View style={styles.Tags}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Tags tags={filteredTags} />
          </ScrollView>
        </View>
        <YoutubeVideo videoUrl={`https://www.youtube.com/embed/${videoData.Youtube}`} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.detailText}>{videoData.Description}</Text>
          <CarouselDef fotos={videoData.Images} onPress={handleImagePress} />
        </View>
      </ScrollView>
      <View style={styles.favContainer}>
        <View style={styles.favBackground} />
        <TouchableWithoutFeedback onPress={handleFavPress}>
          <Image
            source={isFavPressed ? require('../img/FavPressed.png') : require('../img/FavUnpressed.png')}
            style={styles.heartIcon}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.navigation}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1B1212',
  },
  header: {
    height: '20%',
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#1B1212',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  heartIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  detailText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#FFFFFF',
  },
  favContainer: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    alignItems: 'center',
  },
  favBackground: {
    width: 60,
    height: 60,
    backgroundColor: '#413F3F',
    borderRadius: 30,
    position: 'absolute',
    bottom: 0,
    opacity: 0.7,
  },
  heartIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    zIndex: 1,
    opacity: 0.7,
    margin: 2,
  },
  Tags: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  descriptionContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FFFFFF',
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  navigation: {
    height: '10%',
  },
  carouselImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: '#FFF',
  },
  paginationInactiveDot: {
    backgroundColor: '#888',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    height: '80%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  modalImage: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});

export default DetailsScreen;
