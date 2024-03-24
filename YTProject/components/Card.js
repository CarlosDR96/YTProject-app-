import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Tags from './Tags';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Card = ({ onPress, titulo, tags, descripcion, imagenFuente }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.container}>

          <TouchableOpacity styles={styles.touchable} onPress={onPress}>
          <View style={styles.titleContainer}>
            <View style={{width: '90%'}}>
              <Text style={styles.titulo}   numberOfLines={3} ellipsizeMode="tail">{titulo}</Text>
            </View>
            <View style={{justifyContent: 'center', left: 5}}>
              <MaterialIcons padding={2} name="keyboard-arrow-right" size={30} color='white' />
            </View>
            </View>
          </TouchableOpacity>
   
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
    flexDirection: 'row',

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
