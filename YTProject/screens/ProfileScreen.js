import React from 'react';
import { View, Text,  } from 'react-native';
import NavBar from '../components/NavBar';
import styles from '../styles/ProfileScreenStyles';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi, this is Profile page</Text>
      <NavBar NavBar navigation={navigation} />
    </View>
    
  );
};

export default Profile;
