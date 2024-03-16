import React, { useEffect, useState }from 'react';
import { Dimensions, StyleSheet, View, Image, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Callout, Marker} from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MapComponent = ({videosList, navigation}) => {
  const [locationsList, setLocationsList] = useState([]);
  const [markerTitle, setMarkerTitle] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [title, setTitle] = useState("");
    // Estado para almacenar la imagen de cada marcador
  const [markerImages, setMarkerImages] = useState(
      videosList.map(() => require('../img/Pin.png'))
    );

  const route = useRoute();
  const currentRoute = route.name; 
  const getIconColor = (pageName) => {
    return currentRoute === pageName ? 'orange' : '#fff';
  };

  const onTitlePress = ({navigation}) => {
    Alert.alert(
      'Confirmación',
      `¿Quieres ver los detalles del video?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sí',
          onPress: () => {
            // Navegar a la pantalla de detalles aquí
            console.log(currentIndex);
            navigation.navigate('Details', { currentIndex });
    
          },
        },
      ],
    );

    };
    /*Alert.alert(
      'Confirmación',
      `¿Quieres ver los detalles del video?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Sí',
          onPress: () => {
            // Navegar a la pantalla de detalles aquí
            console.log(currentIndex);
            navigation.navigate('Details', { currentIndex });
    
          },
        },
      ],
    );
    //navigation.navigate('Details');
    console.log('check clicked');
  };
*/
  const onClosePress = () => {
    setMarkerTitle(false);
    setMarkerImages(videosList.map(() => require('../img/Pin.png')));
  };

  useEffect(() => {
    const filteredLocations = videosList
      .filter((video) => video.Geopoint !== null && video.Geopoint !== undefined)
      .map((video) => video.Geopoint);

    setLocationsList(filteredLocations);
  }, [videosList]);

  return (
    <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 40.4637,
            longitude: -3.7492,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          >
            
          {locationsList.map((location, index) => (
             
            <Marker
              key={index}
              coordinate={{ latitude: location.latitude, longitude: location.longitude }}
              //title={videosList[index].Title}
              onPress={() => {
                console.log('pin clicked: ' + videosList[index].Title);
                setCurrentIndex(index);
             /*   Alert.alert(
                  'Confirmación',
                  `¿Quieres ver los detalles del video?`,
                  [
                    {
                      text: 'Cancelar',
                      style: 'cancel',
                    },
                    {
                      text: 'Sí',
                      onPress: () => {
                        // Navegar a la pantalla de detalles aquí
                        console.log(currentIndex);
                        navigation.navigate('Details', { currentIndex });
                
                      },
                    },
                  ],
                );
               /* setMarkerTitle(true);
                setCurrentIndex(index);
              
                setTitle(videosList[index].Title);
                // 1. Restaurar la imagen original para todos los marcadores
                const originalImages = videosList.map(() => require('../img/Pin.png'));
                setMarkerImages(originalImages);

                // 2. Cambiar la imagen solo para el marcador seleccionado
                const updatedImages = [...originalImages];
                updatedImages[index] = require('../img/OrangePin.png');
                setMarkerImages(updatedImages);*/
              
              }}
              >
               
                <Image
                    source={markerImages[index]}
                    style={{ width: 30, height: 38 }} // Ajusta los valores según tus necesidades
                  />
                        {/*  {videosList[index].Title} */}
                <Callout  style={styles.callout}onPress={() => onTitlePress({navigation})}>
                  <View>
                      <Text>{videosList[index].Title}</Text>
                  </View>
                </Callout>
         
            </Marker>                   
          ))}        
      </MapView>
      {/*markerTitle && (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.btnContainer}>
              <View style={styles.closeContainer}>
                <TouchableOpacity style={styles.TouchableOpacity} onPress={onClosePress}>
                  <FontAwesome padding={2} name="close" size={35} color='red' />
                </TouchableOpacity>
              </View>
              <View style={styles.thumbsContainer}>
                <TouchableOpacity style={styles.TouchableOpacity}  onPress={() => onCheckPress({ navigation })}>
                  <FontAwesome padding={2} name="check" size={35} color='green' />
                </TouchableOpacity>
              </View>
            </View>
          </View>
      )*/}
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    align: 'center',
   // flex: 1,
    width: '95%',
    height: '98%',
    marginLeft: '2.5%',
    marginTop: '2%',
    padding: 20,
    borderRadius: 15, // Ajusta este valor para cambiar la curvatura de las esquinas
    borderWidth: 0,
    overflow: 'hidden', // Importante para que las esquinas redondeadas se muestren correctamente
  },
  map: {
    width: width,
    height: height,
    position: 'absolute',
  //  alignItems: 'center',
  },
  titleContainer: {
    //position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.7,
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
  },
  title: {
   // padding: 15,
    justifyContent: 'center',
    color: 'white',
  },
  btnContainer: {
    //position: 'absolute',
    flexDirection: 'row',
   // backgroundColor: 'blue',
    padding: 2,
    justifyContent: 'space-evenly',
    width: '80%',

  },
  closeContainer: {
    //backgroundColor: 'red',
    padding: 5,

  },
  thumbsContainer: {
   // backgroundColor: 'green',
    padding: 5,

  },
  TouchableOpacity: {
   // backgroundColor: 'blue'
  },
  callout: {
    //backgroundColor: 'blue',
    overflow: 'visible',
    flex: 1,
    width: '400%',
   
    
  },

 
});
export default MapComponent;
