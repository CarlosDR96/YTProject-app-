import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';


const { width, height } = Dimensions.get('window');

const MapComponent = () => {
  return (
    <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
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
    overflow: 'hidden', // Importante para que las esquinas redondeadas se muestren correctamente
  },
  map: {
    width: width,
    height: height,
    position: 'absolute',
  },
});
export default MapComponent;
