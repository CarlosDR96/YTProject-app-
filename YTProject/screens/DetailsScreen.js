import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';
import logo from '../img/SezarBlueLogo.png';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Tags from '../components/Tags';
import YoutubeVideo from '../components/YoutubeVideo';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Carousel, { Pagination } from 'react-native-snap-carousel';


const DetailsScreen = ({ route, navigation }) => {
  const { params } = route;
  const videoData = params ? params.videoData : null;
  const tagsIndex = params ? params.tagsIndex : null;
  const tagsList = params ? params.tagsList : null;

  const [activeSlide, setActiveSlide] = useState(0);
  const [isFavPressed, setIsFavPressed] = useState(false);

  // Create a new array of filtered tags based on positions in videoData.Tags
  const filteredTags = videoData.Tags.map((tagIndex) =>
    tagsList && tagsList.length > tagIndex ? tagsList[tagIndex] : null
  );

  const renderImageItem = ({ item }) => (
    <Image
      source={{ uri: item }}
      style={styles.carouselImage}
      resizeMode="cover"
    />
  );

  const handleFavPress = () => {
    setIsFavPressed(!isFavPressed);
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Header imageSource={logo} />
        </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{videoData.Title}</Text>
        </View>
        <Text style={styles.detailText}>{videoData.Restaurant}</Text>
        <Text style={styles.detailText}>{videoData.Address}</Text>
        <Text style={styles.detailText}>{videoData.Youtube}</Text>
          <View style={styles.favTag}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Tags tags={filteredTags} /> 
          </ScrollView>
          <TouchableWithoutFeedback onPress={handleFavPress}>
            <Image
              source={isFavPressed ? require('../img/FavPressed.png') : require('../img/FavUnpressed.png')}
              style={styles.heartIcon}
            />
          </TouchableWithoutFeedback>
          </View>
        <YoutubeVideo videoUrl={`https://www.youtube.com/embed/${videoData.Youtube}`} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.detailText}>{videoData.Description}</Text>
          <Carousel
            data={videoData.Images}
            renderItem={renderImageItem}
            sliderWidth={300}
            itemWidth={300}
            onSnapToItem={(index) => setActiveSlide(index)}
          />
          <Pagination
            dotsLength={videoData.Images.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.paginationDot}
            inactiveDotStyle={styles.paginationInactiveDot}
            inactiveDotOpacity={0.6}
            inactiveDotScale={0.8}
          />
        </View>
      </ScrollView>
  
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
    resizeMode: 'contain'
  },
  detailText: {
    fontSize: 16,
    marginVertical: 5,
    color: '#FFFFFF',
  },
  favTag: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row', // Add this line
    justifyContent: 'space-between', // Add this line
  },
  descriptionContainer: {
    marginTop: 20,
    alignItems: 'center'
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
});

export default DetailsScreen;
