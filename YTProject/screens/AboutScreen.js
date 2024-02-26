import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';

const About = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>About Us</Text>
                
                <Text style={styles.text}>Welcome to our app! We strive to provide...</Text>
                
                <View style={styles.imageContainer}>
                    <Image 
                        source={require('../img/SplashScreen.png')} 
                        style={styles.image} 
                        resizeMode="cover" 
                    />
                    <Text style={styles.textBesideImage}>Additional information related to the image.</Text>
                </View>
                
                <Text style={styles.text}>More details about our app...</Text>
            </View>
            
            <View style={styles.footer}>
                <NavBar navigation={navigation} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1212',
        position: 'relative',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 20,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
    textBesideImage: {
        flex: 1,
        fontSize: 16,
        color: '#FFFFFF',
    },
    footer: {
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        height: 50, // Height of your navigation bar
        backgroundColor: 'blue', // Example color for the navigation bar
    },
});

export default About;

