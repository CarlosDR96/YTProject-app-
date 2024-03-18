import React, { useEffect, useState }from 'react';
import { Dimensions, StyleSheet, View, Image, TouchableOpacity, Alert, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';
import MapView, { Callout, Marker} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const MapComponent = ({ videosList, navigation }) => {
  const [locationsList, setLocationsList] = useState([]);

  const [currentLocation, setCurrentLocation] = useState(null);

  const onMarkerPress = (videoData) => {
    navigation.navigate('Details', { videoData });
  };

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    } catch (error) {
      console.error('Error getting current location:', error);
    }
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

  useEffect(() => {
    const filteredLocations = videosList
      .filter((video) => video.Geopoint !== null && video.Geopoint !== undefined)
      .map((video) => video.Geopoint);

    setLocationsList(filteredLocations);

    // Obtener la ubicación actual al cargar el componente
    getCurrentLocation();
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
              onPress={() => {
                console.log('pin clicked: ' + videosList[index].Title);
                setCurrentIndex(index);
            
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
      {/* Botón para centrar el mapa en la ubicación actual */}
      <TouchableOpacity style={styles.centerButton} onPress={getCurrentLocation}>
        <Text style={styles.centerButtonText}>Centrar Mapa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    alignItems: 'center',  // En lugar de "align"
    flex: 1,
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
  centerButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  centerButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

});

export default MapComponent;
