import React, { useEffect } from 'react'
import { View, Text,  } from 'react-native';
import NavBar from '../components/NavBar';
import styles from '../styles/ProfileScreenStyles';

const Profile = ({ navigation }) => {
  useEffect(() => { 
    console.log("He entrat a favorits");

  }, []);

  return (
    <View style={styles.container}>
        <Text style={[styles.text, { fontSize: 30 }]}>This is the Profile Screen</Text>
        <NavBar NavBar navigation={navigation} />
    </View>
    
  );
};

export default Profile;
