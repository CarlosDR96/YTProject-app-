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



const HomeScreen = ({ navigation }) => {
  const [viewType, setViewType] = useState('Map'); // Estado para controlar el tipo de vista
  const [videosList, setVideosList] = useState([]);
  const [tagsList, setTagsList] = useState([]);
  const [refresh, setRefresh] = useState("");


  const onPress = ({navigation }) => {
    navigation.navigate('Details');
    console.log('card clicked');
  };
  const toggleViewType = (newType) => {
    if (newType !== viewType) {
      setViewType(newType);
    }
  };

  const recieveData = (data) => {
    //use states videoslist tagslist
  }
  
  useEffect(() => { // Funció que es crida al començar. Ve a ser un OnCreate d'Android/start()
    // Función para obtener todos los usuarios
    console.log("He entrat a home screen");
   // videoManager.subscribe(recieveData);

    
    const fetchVideos = async () => {
      try {
       // console.log(db);
        const videosCol = collection(db, 'Videos'); // Accede a la colección 'Users'
        const videoSnapshot = await getDocs(videosCol); // Obtiene todos los documentos
        const videosListData = videoSnapshot.docs.map(doc => doc.data()); // Mapea cada documento a su data
        setVideosList(videosListData);
  

        const tagsCol = collection(db, "Tags");
        const tagsSnapshot = await getDocs(tagsCol);
        const tagsListData = tagsSnapshot.docs.map(doc => doc.data());
        setTagsList(tagsListData[0].Values);
        setRefresh(" ");  
    
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchVideos(); // Llama a la función al inicio
  }, []);


  return  (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header imageSource={logo} />
      </View>
      <View style={styles.map}>
        <ViewTypeSelector onToggle={toggleViewType} selected={viewType}/>
      </View>

      <View style={{flex: 1}}>
      {viewType === 'Map' && videosList && videosList.length > 0 ? 
          (
            <MapComponent videosList={videosList} navigation={navigation}/> // Usa el componente MapComponent
          ) : 
          (
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              {videosList && tagsList.length > 0 ? (
                videosList.map((item, index) => (
                      <TouchableCard  onPress={() => onPress({ navigation })} key={index} title={item.Title} tags={item.Tags} tagsList={tagsList}
                      desc={item.Description} sourceImg={item.Youtube}/>
                ))
              ) : (
                // Mostrar un mensaje de carga o un indicador de vacío
                <Text style={styles.titulo}>Cargando...</Text>
              )}
          
            </ScrollView>
          )
        }
      </View>
      <View style={styles.footer}></View>
      <NavBar NavBar navigation={navigation} />
    </View>
  );  
}
    

export default HomeScreen;
