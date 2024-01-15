import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Tags from './Tags';

const Card = ({ titulo, tags, descripcion, imagenFuente }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contenidoContainer}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Tags tags={tags} />
        <Text style={styles.descripcion}>{descripcion}</Text>
      </View>
      <View style={styles.imagenContainer}>
        <Image style={styles.imagen} source={{ uri: imagenFuente }} />
      </View>
    </View>
  );
};

const { height } = Dimensions.get('window');
const cardHeight = height * 0.2; // Ajusta este valor según tus necesidades

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#262626',
    borderRadius: 8,
    margin: 10,
    overflow: 'hidden',
  },
  imagenContainer: {
    width: '30%',
  },
  imagen: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
    margin: 5,
  },
  contenidoContainer: {
    width: '70%',
    padding: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  descripcion: {
    fontSize: 16,
    color: 'white',
  },
});

export default Card;
