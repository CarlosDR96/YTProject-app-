import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native';
import styles from '../styles/NavBarStyles'; // Adjust the import path as necessary

const NavBar = ({ navigation }) => {
    const route = useRoute();
    const currentRoute = route.name; // Retrieves the current route name

    // Function to determine icon color based on the current page
    const getIconColor = (pageName) => {
        return currentRoute === pageName ? 'orange' : '#fff';
    };

    return (
        <View style={styles.navBar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navItem}>
                <MaterialIcons name="home" size={30} color={getIconColor('Home')} />
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.navItem}>
                <MaterialIcons name="person" size={30} color={getIconColor('Profile')} />
                <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.navItem}>
                <MaterialIcons name="info" size={30} color={getIconColor('About')} />
                <Text style={styles.navText}>About</Text>
            </TouchableOpacity>
        </View>
    );
};



export default NavBar;
