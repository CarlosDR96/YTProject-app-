import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import NavBar from '../components/NavBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import Header from '../components/Header';
import logo from '../img/SezarBlueLogo.png';
import homeStyles from '../styles/HomeScreenStyles'; // Adjust the import path as necessary
import { useRoute } from '@react-navigation/native';


const AboutScreen = ({ navigation }) => {
  const route = useRoute();
  const currentRoute = route.name; 
   // Function to determine icon color based on the current page
  const getIconColor = (pageName) => {
    return currentRoute === pageName ? 'orange' : '#fff';
  };

  return (
    <View style={styles.aboutContainer}>
       <View style={homeStyles.header}>
        <Header imageSource={logo} />
      </View>
      <View style={styles.body}>
        <View style={styles.detailsContainer}>
        <FontistoIcons name="instagram" size={30} color={getIconColor('instagram')} />


        </View>
        <View style={styles.detailsContainer}>

        </View>

      </View>
      
        <NavBar NavBar navigation={navigation} />
        
    </View>
    
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'blue',
 
  },
  body: {
    height: '70%',
    width: '100%',
    backgroundColor: 'green',
    padding: 30,
    justifyContent: 'space-evenly',
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: 'red',
    padding: 20,
    borderWidth: 5,
    borderColor: 'yellow',
    borderRadius: 20,

  },
  
});

export default AboutScreen;
