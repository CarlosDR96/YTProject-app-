import React, { useEffect, useState }from 'react';
import { Dimensions, StyleSheet, View, Image, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker} from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MapComponent = ({videosList, navigation}) => {
  const [locationsList, setLocationsList] = useState([]);
  const [markerTitle, setMarkerTitle] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [title, setTitle] = useState("");
  console.log("Title " + videosList[0].Title);

  const route = useRoute();
  const currentRoute = route.name; 
  const getIconColor = (pageName) => {
    return currentRoute === pageName ? 'orange' : '#fff';
  };

  const onCheckPress = ({navigation}) => {
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
    //navigation.navigate('Details');
    console.log('check clicked');
  };

  const onClosePress = () => {
    setMarkerTitle(false);
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
              onPress={() => {
                console.log('pin clicked: ' + videosList[index].Title);
                markerTitle ? setMarkerTitle(false) : setMarkerTitle(true);
                setCurrentIndex(index);
                setTitle(videosList[index].Title);
              
              }}
              >
                <Image
                    source={require('../img/Pin.png')}
                    style={{ width: 30, height: 38 }} // Ajusta los valores según tus necesidades
                  />
                        {/*  {videosList[index].Title} */}
         
            </Marker>                   
          ))}        
      </MapView>
      {markerTitle && (
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
        )}
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
    alignItems: 'center',
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
 
});
export default MapComponent;
