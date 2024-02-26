import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import NavBar from '../components/NavBar';
import styles from '../styles/ProfileScreenStyles';

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={[styles.text, { fontSize: 30 }]}>This is the About Screen</Text>
        <NavBar NavBar navigation={navigation} />
    </View>
    
  );
};



export default AboutScreen;
