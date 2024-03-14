import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Tags from './Tags';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Card = ({ onPress, titulo, tags, descripcion, imagenFuente }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <TouchableOpacity styles={styles.touchable} onPress={onPress}>
            <Text style={styles.titulo}   numberOfLines={3} ellipsizeMode="tail">{titulo}</Text>
          </TouchableOpacity>
          </View>
                  {/* Envuelve Tags con ScrollView horizontal */}
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
                <Tags tags={tags} />
              </ScrollView>
          
              {/* Contenedor adicional para la descripción */}
           <View style={styles.contenidoContainer}>
            <View style={styles.descripcionContainer}>
                <Text style={styles.descripcion} numberOfLines={4} ellipsizeMode="tail">
                {descripcion}
                </Text>
                         
            </View>
            <View style={styles.imagenContainer}>
              <Image style={styles.imagen} source={{ uri: imagenFuente }} />
            </View>
           </View>          
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');
const cardWidth = width * 0.3; // Ajusta este valor según tus necesidades

const styles = StyleSheet.create({
  cardContainer: {
  //  backgroundColor: 'blue',
    width: '100%',
    alignItems: 'center',
    padding: 10,
   // margin: 10,
 

  },
  container: {
    width: '100%',
    backgroundColor: '#323232',
  //  backgroundColor: 'yellow',
    borderRadius: 15,
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 20,
  },
  touchable: {
  //  backgroundColor: 'green',
  },
  imagenContainer: {
    width: '30%',
    height: cardWidth*0.6, // La altura es igual al ancho
    justifyContent: 'center', // Centra verticalmente la imagen
    overflow: 'hidden', // Para asegurarse de que no sobresalga del contenedor
   // backgroundColor: 'green',
    marginLeft: 10,
    marginRight: 3,
    borderRadius: 8,
    marginTop: 3,
  },
  imagen: {
    width: '100%',
    aspectRatio: 1, // Hace que la imagen sea cuadrada
    resizeMode: 'cover',
  },
  contenidoContainer: {
    flexDirection: 'row',
    width: '100%',
   //  backgroundColor: 'red',
  },
  titleContainer: {
    width: '100%',
  //  backgroundColor: 'blue',

  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  descripcionContainer: {
    flex: 1,
   // backgroundColor: 'green',
    width: '60%',
  },
  descripcion: {
    fontSize: 14,
    color: 'white',
    marginTop: 3,
    marginRight: 8,
    textAlign: 'justify',
  },
  scroll: {
    marginTop: 10,
    marginBottom: 5,

  },
});

export default Card;
