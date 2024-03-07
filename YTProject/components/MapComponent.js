import React, { useEffect, useState }from 'react';
import { Dimensions, StyleSheet, View, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker} from 'react-native-maps';


const { width, height } = Dimensions.get('window');

const MapComponent = ({videosList, navigation}) => {
  const [locationsList, setLocationsList] = useState([]);
  console.log("Title " + videosList[0].Title);

  const onPress = ({navigation }) => {
    navigation.navigate('Details');
    console.log('card clicked');
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
              title={videosList[index].Title}
              onPress={() => {
                // Mostrar una alerta antes de navegar a la pantalla de detalles
                Alert.alert(
                  'Confirmación',
                  `¿Quieres ver los detalles del video "${videosList[index].Title}"?`,
                  [
                    {
                      text: 'Cancelar',
                      style: 'cancel',
                    },
                    {
                      text: 'Sí',
                      onPress: () => {
                        // Navegar a la pantalla de detalles aquí
                        navigation.navigate('Details', { videoId: videosList[index].id });
                      },
                    },
                  ],
                );
              }}
              >
                <Image
                    source={require('../img/Pin.png')}
                    style={{ width: 30, height: 38 }} // Ajusta los valores según tus necesidades
                  />
            </Marker>
          ))}
      </MapView>
      </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    align: 'center',
    flex: 1,
    width: '95%',
    height: '100%',
    marginLeft: '2.5%',
    padding: 20,
    borderRadius: 15, // Ajusta este valor para cambiar la curvatura de las esquinas
    borderWidth: 0,
    overflow: 'hidden', // Importante para que las esquinas redondeadas se muestren correctamente
  },
  map: {
    width: width,
    height: height,
    position: 'absolute',
  },
});
export default MapComponent;
