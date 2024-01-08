import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Card from './components/Card';
import NavigationComponent from './components/NavigationComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View styleNav={styles.map}>
        <NavigationComponent
          
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card
          titulo="Título de la Carta 1"
          tags="#React #Native #Expo"
          descripcion="Descripción de la carta. Aquí puedes agregar más detalles sobre el contenido. Esta es una descripción más larga para probar la capacidad de desplazamiento en la carta."
          imagenFuente="https://www.revistainteriores.es/uploads/s1/23/67/55/5/los-25-restaurantes-con-mejor-diseno-de-barcelona.jpeg"
        />
        <Card
          titulo="Título de la Carta 2"
          tags="#React #Native #Expo"
          descripcion="Descripción de la segunda carta. Más detalles sobre el contenido."
          imagenFuente="https://media-cdn.tripadvisor.com/media/photo-s/1b/90/21/e9/entrada-principal-del.jpg"
        />
        <Card
          titulo="Título de la Carta 3"
          tags="#React #Native #Expo"
          descripcion="Descripción de la tercera carta. Más detalles sobre el contenido."
          imagenFuente="https://media-cdn.tripadvisor.com/media/photo-s/1b/90/21/e9/entrada-principal-del.jpg"
        />
        <Card
          titulo="Título de la Carta 4"
          tags="#React #Native #Expo"
          descripcion="Descripción de la cuarta carta. Más detalles sobre el contenido."
          imagenFuente="https://media-cdn.tripadvisor.com/media/photo-s/1b/90/21/e9/entrada-principal-del.jpg"
        />
        <Card
          titulo="Título de la Carta 5"
          tags="#React #Native #Expo"
          descripcion="Descripción de la quinta carta. Más detalles sobre el contenido."
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
    backgroundColor: '#fff',
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
    backgroundColor: 'blue',
    height: '10%',
  },
  footer: {
    backgroundColor: 'pink',
    height: '10%',
  },
});
