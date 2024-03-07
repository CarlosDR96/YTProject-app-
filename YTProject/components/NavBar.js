import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native';
import styles from '../styles/NavBarStyles'; // Adjust the import path as necessary


const NavBar = ({ navigation, videosList}) => {
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
               
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => {
                    console.log('VIDEOS LIST navbar: ', videosList);
                    navigation.navigate('Favorites', { restaurants: videosList });
                }} 
                style={styles.navItem}
                >
                <MaterialIcons name="favorite" size={30} color={getIconColor('Favorites')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Poll')} style={styles.navItem}>
                <MaterialIcons name="addchart" size={30} color={getIconColor('Poll')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.navItem}>
                <MaterialIcons name="info" size={30} color={getIconColor('About')} />
            </TouchableOpacity>
        </View>
    );
};



export default NavBar;
