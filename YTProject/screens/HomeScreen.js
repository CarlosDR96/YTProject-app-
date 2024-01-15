import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../components/NavBar2';
import Card from '../components/Card'
import Tags from '../components/Tags';
import MapView from 'react-native-maps';



const HomeScreen = ({ navigation }) => {
  const [viewType, setViewType] = useState('Map'); // Estado para controlar el tipo de vista

  const toggleViewType = () => {
    setViewType((prevType) => (prevType === 'Map' ? 'List' : 'Map')); // Cambiar entre 'Map' y 'List'
  };
    return (
        <View style={styles.container}>
          <View style={styles.header}></View>
          <View style={styles.map}>
            <NavBar onToggle={toggleViewType} />
          </View>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Card
              titulo={<Text style={styles.whiteText}>"Título de la Carta 1"</Text>}
              tags="#React #Native #Expo"
              descripcion={<Text style={styles.whiteText}>"Descripción de la carta. Aquí puedes agregar más detalles sobre el contenido. Esta es una descripción más larga para probar la capacidad de desplazamiento en la carta."</Text>}
              imagenFuente="https://www.revistainteriores.es/uploads/s1/23/67/55/5/los-25-restaurantes-con-mejor-diseno-de-barcelona.jpeg"
            />
            <Card
              titulo={<Text style={styles.whiteText}>"Título de la Carta 2"</Text>}
              tags="#React #Native #Expo"
              descripcion={<Text style={styles.whiteText}>"Descripción de la segunda carta. Más detalles sobre el contenido."</Text>}
              imagenFuente="https://media-cdn.tripadvisor.com/media/photo-s/1b/90/21/e9/entrada-principal-del.jpg"
            />
            <Card
              titulo={<Text style={styles.whiteText}>"Título de la Carta 3"</Text>}
              tags="#React #Native #Expo"
              descripcion={<Text style={styles.whiteText}>"Descripción de la tercera carta. Más detalles sobre el contenido."</Text>}
              imagenFuente="https://media-cdn.tripadvisor.com/media/photo-s/1b/90/21/e9/entrada-principal-del.jpg"
            />
            <Card
              titulo={<Text style={styles.whiteText}>"Título de la Carta 4"</Text>}
              tags="#React #Native #Expo"
              descripcion={<Text style={styles.whiteText}>"Descripción de la cuarta carta. Más detalles sobre el contenido."</Text>}
              imagenFuente="https://media-cdn.tripadvisor.com/media/photo-s/1b/90/21/e9/entrada-principal-del.jpg"
            />
            <Card
              titulo={<Text style={styles.whiteText}>"Título de la Carta 5"</Text>}
              tags="#React #Native #Expo"
              descripcion={<Text style={styles.whiteText}>"Descripción de la quinta carta. Más detalles sobre el contenido."</Text>}
              imagenFuente="https://media-cdn.tripadvisor.com/media/photo-s/1b/90/21/e9/entrada-principal-del.jpg"
            />
            {/* Agrega más cartas según sea necesario */}
          </ScrollView>
          <View style={styles.footer}></View>
        </View>
      );
    }
    
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#3F3F3F',
      },
      scrollContainer: {
        alignItems: 'center',
        paddingVertical: 20,
      },
      header: {
        backgroundColor: 'red',
        height: '20%',
      },
      map: {
        backgroundColor: '#3F3F3F',
        height: '10%',
      },
      footer: {
        backgroundColor: 'pink',
        height: '10%',
      },
      whiteText: {
        color: 'white',
      },
      orangeText: {
        color: 'orange',
      }
    });
    

export default HomeScreen;
