import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NavBar = ({ navigation }) => {
    return (
        <View style={styles.navBar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.navItem}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.navItem}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
        backgroundColor: '#f0f0f0'
    },
    navItem: {
        padding: 20
    }
});

export default NavBar;
