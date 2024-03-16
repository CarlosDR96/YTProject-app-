import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ViewTypeSelector from '../components/ViewTypeSelector';
import NavigationComponent from '../components/NavigationComponent';
import NavBar from '../components/NavBar';
import Card from '../components/Card'
import Tags from '../components/Tags';
import MapView from 'react-native-maps';
import Header from '../components/Header'; // Importa el componente Header
import logo from '../img/SezarBlueLogo.png';
import MapComponent from '../components/MapComponent';
import styles from '../styles/HomeScreenStyles'; // Adjust the import path as necessary
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import TouchableCard from '../components/TouchableCard';
import { loadFavorites, saveFavorites } from '../storage/AsyncStorageHelper';
import VideoManager from '../utils/VideoManager';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const HomeScreen = ({ navigation }) => {
  const [viewType, setViewType] = useState('Map'); // Estado para controlar el tipo de vista
  const [videosList, setVideosList] = useState([]);
  const [tagsList, setTagsList] = useState([]);
  
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed); // Cambia el estado al presionar
  };


  const onPress = ({navigation }) => {
    navigation.navigate('Details');
    console.log('card clicked');
  };

  const toggleViewType = (newType) => {
    if (newType !== viewType) {
      setViewType(newType);
    }
  };

  const recieveVideoData = (data) => {
    setVideosList(data)
  }
  const recieveTagsData = (data) => {
    setTagsList(data)
  }

  
  useEffect(() => { 
    VideoManager.subscribe(recieveVideoData, 1); 
    VideoManager.subscribe(recieveTagsData, 2);

    console.log("He entrat a home screen");
  
}, []);


  return  (
    <View style={styles.container}>
      
        <Header imageSource={logo} />
      
      <View style={styles.rowContainer}>
          <TouchableOpacity onPress={handlePress}>
              <View style={styles.icon}>
                <MaterialIcons name="search" size={43} style={{ color: isPressed ? 'orange' : 'white' }} />
              </View>
          </TouchableOpacity>
          <View>
              <ViewTypeSelector onToggle={toggleViewType} selected={viewType}/>
          </View>
      {/* Imagen de los filtros a la derecha */}
          <MaterialIcons name="filter-alt" size={40} color="white"/>
      </View>


      {/* </View>
       <View style={styles.map}>
         {/* Imagen de la lupa a la izquierda 
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.icon}>
            <MaterialIcons name="search" size={43} style={{ color: isPressed ? 'orange' : 'white' }} />
          </View>
        </TouchableOpacity>
        {isPressed && (
          <View>
            <Text>search</Text>
          </View>
        )}
          <ViewTypeSelector onToggle={toggleViewType} selected={viewType}/>
      </View>*/}

      <View style={{flex: 1}}>
      {viewType === 'Map' && videosList && videosList.length > 0 ? 
          (
            <MapComponent videosList={videosList} navigation={navigation}/> 
          ) : 
          (
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              {videosList && tagsList.length > 0 ? (
                videosList.map((item, index) => (
                      <TouchableCard  onPress={() => onPress({ navigation })} key={index} title={item.Title} tags={item.Tags} tagsList={tagsList}
                      desc={item.Description} sourceImg={item.Youtube}/>
                ))
              ) : (
                <Text style={styles.titulo}>Cargando...</Text>
              )}
          
            </ScrollView>
          )
        }
      </View>
          <NavBar Navbar navigation={navigation} videosList={videosList} />
    </View>
  );  
}
    

export default HomeScreen;
