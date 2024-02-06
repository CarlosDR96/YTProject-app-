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

const HomeScreen = ({ navigation }) => {
  const [viewType, setViewType] = useState('Map'); // Estado para controlar el tipo de vista

  const onPress = ({navigation }) => {
    navigation.navigate('Details');
    console.log('card clicked');
  };
  const toggleViewType = (newType) => {
    if (newType !== viewType) {
      setViewType(newType);
    }
  };

  useEffect(() => { // Funció que es crida al començar. Ve a ser un OnCreate d'Android/start()
    // Función para obtener todos los usuarios
    const fetchUsers = async () => {
      try {
        console.log(db);
  const usersCol = collection(db, 'Users'); // Accede a la colección 'Users'
  const userSnapshot = await getDocs(usersCol); // Obtiene todos los documentos
  const userList = userSnapshot.docs.map(doc => doc.data()); // Mapea cada documento a su data
  console.log(userList[0].Nom); // Imprime los datos obtenidos
  
    
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchUsers(); // Llama a la función al inicio
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
        {viewType === 'Map' ?
          (
            <MapComponent /> // Usa el componente MapComponent
          ) : 
          (
            <ScrollView contentContainerStyle={styles.scrollContainer}>
               <TouchableOpacity onPress={() => onPress({navigation })}>
              <Card
                titulo={<Text style={styles.whiteText}>Probando El RESTAURANTE MÁS ANTIGUO del MUNDO - ABIERTO EN 1702</Text>}
                tags="#React #Native #Expo"
                descripcion={<Text style={styles.whiteText}>Esto está muy debatido y rebatido... Parece que se quemaron los documentos en la guerra... pero este lugar aseguran que este restaurante lleva abierto desde 1702!!! Su comida debe ser INCREIBLE si ha permanecido durante tantos años abierto...</Text>}
                imagenFuente="https://media-cdn.tripadvisor.com/media/photo-s/1b/90/21/e9/entrada-principal-del.jpg"
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onPress({navigation })}>
              <Card
                titulo={<Text style={styles.whiteText}>El RESTAURANTE de PUEBLO más GOURMET que encontré en el PAÍS VASCOoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo!!!</Text>}
                tags="#React #Native #Expo #tag #tag #tag #taaaaag #tag"
                descripcion={<Text style={styles.whiteText}>"Descripción de la segunda carta. Más detalles sobre el contenido."</Text>}
                imagenFuente="https://media-cdn.tripadvisor.com/media/photo-s/1b/90/21/e9/entrada-principal-del.jpg"
              />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => onPress({navigation })}>
              <Card
                titulo={<Text style={styles.whiteText}>he DESCUBIERTO este ASADOR DE PUEBLO en CARRETERA: ABSOLUTAMENTE DELICIOSO!!!</Text>}
                tags="#React #Nativeeeeeee #Expo"
                descripcion={<Text style={styles.whiteText}>Pues esto es la FUSIÓN de dos temáticas que ME ENCANTAN: RESTAURANTE DE PUEBLO y RESTAURANTE DE CARRETERA todo en un mismo lugar. Creo que el video de hoy no tiene desperdicio: asador tradicional con lechazo autóctono a la leña y a la brasa</Text>}
                imagenFuente="https://media-cdn.tripadvisor.com/media/photo-s/1b/90/21/e9/entrada-principal-del.jpg"
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onPress({navigation })}>
              <Card
                titulo={<Text style={styles.whiteText}>Probando El RESTAURANTE MÁS ANTIGUO del MUNDO - ABIERTO EN 1702</Text>}
                tags="#React #Native #Expo"
                descripcion={<Text style={styles.whiteText}>"Descripción de la cuarta carta. Más detalles sobre el contenido."</Text>}
                imagenFuente="https://media-cdn.tripadvisor.com/media/photo-s/1b/90/21/e9/entrada-principal-del.jpg"
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onPress({navigation })}>
              <Card
                titulo={<Text style={styles.whiteText}>Probando El RESTAURANTE MÁS ANTIGUO del MUNDO - ABIERTO EN 1702</Text>}
                tags="#React #Native #Expo"
                descripcion={<Text style={styles.whiteText}>"Descripción de la quinta carta. Más detalles sobre el contenido."</Text>}
            
                imagenFuente="https://media-cdn.tripadvisor.com/media/photo-s/1b/90/21/e9/entrada-principal-del.jpg"
              />
              </TouchableOpacity>
            {/* Agrega más cartas según sea necesario */}
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
