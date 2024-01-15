import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView, StyleSheet, View } from 'react-native';
import Card from './components/Card';
import NavigationComponent from './components/NavigationComponent';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;