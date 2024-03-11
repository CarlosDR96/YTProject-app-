import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = ({ imageSource }) => {
    return (
        <View style={styles.header}>
            <Image
                style={styles.image}
                source={imageSource}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1B1212',
    },
    image: {
        width: '60%',
        height: '50%',
        marginTop: '5%',
    },
});

export default Header;
