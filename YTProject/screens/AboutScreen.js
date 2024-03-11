import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import NavBar from '../components/NavBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import logo from '../img/SezarBlueLogo.png';
import homeStyles from '../styles/HomeScreenStyles'; // Adjust the import path as necessary
import { useRoute } from '@react-navigation/native';
import { Linking } from 'react-native';
import { TouchableOpacity } from 'react-native';



const AboutScreen = ({ navigation }) => {
  const route = useRoute();
  const currentRoute = route.name; 
   // Function to determine icon color based on the current page
  const getIconColor = (pageName) => {
    return currentRoute === pageName ? 'orange' : '#fff';
  };

  const handleInstagramClick = () => {
    Linking.openURL('https://www.instagram.com/sezarblue/');
  };
  
  const handleYouTubeClick = () => {
    Linking.openURL('https://www.youtube.com/@SezarBlue');
  };

  return (
    <View style={styles.aboutContainer}>
      <View style={homeStyles.header}>
        <Header imageSource={logo} />
      </View>
      <View style={styles.body}>
        <View style={styles.detailsContainer}>
          <Text style={styles.lbl}>Redes</Text>
          <View style={styles.line}/>
          <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => handleInstagramClick()} style={styles.touchableContainer}>
            <FontistoIcons padding={15} name="instagram" size={30} color={getIconColor('instagram')} />
            <Text style={styles.text}>@SezarBlue</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => handleYouTubeClick()} style={styles.touchableContainer}>
            <Ionicons padding={15} name="logo-youtube" size={30} color={getIconColor('logo-youtube')} />
            <Text style={styles.text}>@SezarBlue</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.detailsContainer}>
        <Text style={styles.lbl}>Desarrolado por</Text>
        <View style={styles.line}/>
        <View style={styles.iconContainer}>
            <FontistoIcons padding={15} name="instagram" size={30} color={getIconColor('instagram')} />
            <Text style={styles.text}>@SezarBlue</Text>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons padding={15} name="logo-youtube" size={30} color={getIconColor('logo-youtube')} />
            <Text style={styles.text}>@SezarBlue</Text>
          </View>     
          <View style={styles.iconContainer}>
            <Ionicons padding={15} name="logo-youtube" size={30} color={getIconColor('logo-youtube')} />
            <Text style={styles.text}>@SezarBlue</Text>
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
    height: '100%',
    width: '100%',
    backgroundColor: '#1B1212',
    //backgroundColor: 'blue',
 
  },
  body: {
    height: '70%',
    width: '100%',
   // backgroundColor: 'green',
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
   // backgroundColor: 'pink',
    alignItems: 'center',
  },
  touchableContainer: {
    flexDirection: 'row',
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
  }
  
});

export default AboutScreen;
