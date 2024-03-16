import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import NavBar from '../components/NavBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import Ionicons from 'react-native-vector-icons/Ionicons';
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
       
        <Header imageSource={logo} />
   
      <View style={styles.body}>
        <View style={styles.detailsContainer}>
          <Text style={styles.lbl}>Redes</Text>
          <View style={styles.line}/>
          <View style={styles.iconContainer}>
            <FontistoIcons padding={15} name="instagram" size={30} color={getIconColor('instagram')} />
            <Text style={styles.text}>@SezarBlue</Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons padding={15} name="logo-youtube" size={30} color={getIconColor('logo-youtube')} />
            <Text style={styles.text}>@SezarBlue</Text>
          </View>     


        </View>
        <View style={styles.detailsContainer}>
        <Text style={styles.lbl}>Desarrolladores</Text>
        <View style={styles.line}/>
        <View style={styles.devContainer}>
            <FontAwesome5 padding={10} name="users" size={30} color={getIconColor('users')} />
            <View style={styles.devNamesContainer}>
              <Text style={styles.devName}>Biel Díaz Basullas</Text>
              <Text style={styles.devName}>Carlos Domínguez Ramos</Text>
              <Text style={styles.devName}>Joan López Salvans</Text>
              <Text style={styles.devName}>Marc Márquez Soto</Text>
            </View>
          </View>
          <View style={styles.devContainer}>
            <FontAwesome5 padding={10} name="school" size={30} color={getIconColor('school')} />
            <View style={styles.devNamesContainer}>
              <Text style={styles.devName}>Joviat</Text>
            </View>
          </View>
        </View>
      </View>
        <NavBar NavBar navigation={navigation} />
    </View>
    
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
   
    backgroundColor: '#1B1212',
   justifyContent: 'space-between',
   
 
  },
  body: {
    height: '70%',
    width: '100%',
    //backgroundColor: 'green',
    backgroundColor: '#1B1212',
    //padding: 30,
   // justifyContent: 'space-evenly',
  },
  detailsContainer: {
    width: '100%',
  //  backgroundColor: 'red',
    padding: 40,
    paddingRight: 40,
  //  borderWidth: 1,
  //  borderColor: 'yellow',
    borderRadius: 20,

  },
  iconContainer: {
    flexDirection: 'row',
    width: '100%',
  //  backgroundColor: 'pink',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  lbl: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 40,
    paddingBottom: 5,
  //  backgroundColor: 'red',
    
  },
  line: {
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 30,
  },
  devContainer: {
    flexDirection: 'row',
    width: '100%',
    //backgroundColor: 'pink',
    alignItems: 'center',
    paddingTop: 10,
  },
  devNamesContainer: {
    margin: 5,
    //marginTop: 18,
  //  backgroundColor: 'blue',

  },
  devName: {
    color: 'white',
    fontSize: 16,
    padding: 5,
  }
  
});

export default AboutScreen;
