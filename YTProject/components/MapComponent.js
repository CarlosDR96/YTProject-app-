import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker} from 'react-native-maps';


const { width, height } = Dimensions.get('window');

const MapComponent = ({locations}) => {
  console.log(locations[1]);
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
          {locations.map((location, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: location.latitude, longitude: location.longitude }}
              title={`Marker ${index + 1}`}
            />
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
    borderWidth: 3,
    borderColor: '#343434',
    overflow: 'hidden', // Importante para que las esquinas redondeadas se muestren correctamente
  },
  map: {
    width: width,
    height: height,
    position: 'absolute',
  },
});
export default MapComponent;
