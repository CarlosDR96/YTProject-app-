import React, { useState } from 'react';
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

const HomeScreen = ({ navigation }) => {
  const [viewType, setViewType] = useState('Map'); // Estado para controlar el tipo de vista


 /* const toggleViewType = () => {
    setViewType((prevType) => (prevType === 'Map' ? 'List' : 'Map')); // Cambiar entre 'Map' y 'List'
        
  };*/

  const onPress = ({navigation }) => {
    navigation.navigate('Details');
    console.log('card clicked');
  };
  const toggleViewType = (newType) => {
    if (newType !== viewType) {
      setViewType(newType);
    }
  };

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
                titulo={<Text style={styles.whiteText}>"Título de la Carta 1"</Text>}
                tags="#React #Native #Expo"
                descripcion={<Text style={styles.whiteText}>"Descripción de la carta. Aquí puedes agregar más detalles sobre el contenido. Esta es una descripción más larga para probar la capacidad de desplazamiento en la carta."</Text>}
                imagenFuente="https://www.revistainteriores.es/uploads/s1/23/67/55/5/los-25-restaurantes-con-mejor-diseno-de-barcelona.jpeg"
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onPress({navigation })}>
              <Card
                titulo={<Text style={styles.whiteText}>"Título de la Carta 2"</Text>}
                tags="#React #Native #Expo"
                descripcion={<Text style={styles.whiteText}>"Descripción de la segunda carta. Más detalles sobre el contenido."</Text>}
                imagenFuente="https://media-cdn.tripadvisor.com/media/photo-s/1b/90/21/e9/entrada-principal-del.jpg"
              />
               </TouchableOpacity>
               <TouchableOpacity onPress={() => onPress({navigation })}>
              <Card
                titulo={<Text style={styles.whiteText}>"Título de la Carta 3"</Text>}
                tags="#React #Nativeeeeeee #Expo"
                descripcion={<Text style={styles.whiteText}>"Descripción de la tercera carta. Más detalles sobre el contenido."</Text>}
                imagenFuente="https://media-cdn.tripadvisor.com/media/photo-s/1b/90/21/e9/entrada-principal-del.jpg"
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onPress({navigation })}>
              <Card
                titulo={<Text style={styles.whiteText}>"Título de la Carta 4"</Text>}
                tags="#React #Native #Expo"
                descripcion={<Text style={styles.whiteText}>"Descripción de la cuarta carta. Más detalles sobre el contenido."</Text>}
                imagenFuente="https://media-cdn.tripadvisor.com/media/photo-s/1b/90/21/e9/entrada-principal-del.jpg"
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onPress({navigation })}>
              <Card
                titulo={<Text style={styles.whiteText}>"Título de la Carta 5"</Text>}
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
