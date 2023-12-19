import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from '.components/NavBar'; // Adjust the import path based on your file structure

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to the Home Screen!</Text>
            {/* Add more content here as needed */}
            <NavBar navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    heading: {
        fontSize: 24,
        marginBottom: 20
    }
});

export default HomeScreen;
