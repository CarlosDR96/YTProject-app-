import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Tags from './Tags';

const Card = ({ titulo, tags, descripcion, imagenFuente }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contenidoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titulo} numberOfLines={3} ellipsizeMode="tail">{titulo}</Text>
          </View>
          {/* Envuelve Tags con ScrollView horizontal */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Tags tags={tags} />
          </ScrollView>
          {/* Contenedor adicional para la descripción */}
          <View style={styles.descripcionContainer}>
            <Text style={styles.descripcion} numberOfLines={4} ellipsizeMode="tail">
              {descripcion}
            </Text>
          </View>
      </View>
      <View style={styles.imagenContainer}>
        <Image style={styles.imagen} source={{ uri: imagenFuente }} />
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');
const cardWidth = width * 0.3; // Ajusta este valor según tus necesidades

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#262626',
    borderRadius: 8,
    margin: 8,
    overflow: 'hidden',
  },
  imagenContainer: {
    width: '33%',
    height: cardWidth*0.7, // La altura es igual al ancho
    justifyContent: 'center', // Centra verticalmente la imagen
    overflow: 'hidden', // Para asegurarse de que no sobresalga del contenedor
    backgroundColor: 'green',
    marginTop: '30%',
    marginBottom: '1%',
    borderRadius: 8,
  },
  imagen: {
    width: '100%',
    aspectRatio: 1, // Hace que la imagen sea cuadrada
    resizeMode: 'cover',
    marginRight: 2, // Margen de 1 píxel a la derecha
   // marginTop: 60,
  },
  contenidoContainer: {
    width: '65%',
    padding: 13,
   // backgroundColor: 'red',
  },
  titleContainer: {
    width: '150%',

  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  descripcionContainer: {
    flex: 1, // Para que la descripción ocupe el espacio disponible
  },
  descripcion: {
    fontSize: 14,
    color: 'white',
  },
});

export default Card;
