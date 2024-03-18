import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

const Header = ({ imageSource }) => {
    return (
        <View style={styles.header}>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.image}
                    source={imageSource}
                    resizeMode="contain"
                />
            </View>
           
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        // Otros estilos según tus necesidades
      },
      imgContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        alignItems: 'center',
      //  backgroundColor: 'red', // Solo para visualización (puedes eliminarlo)
        overflow: 'visible',
      },
      image: {
        position: 'absolute',
        width: '60%', // Ajusta según tus necesidades
        height: '50%',
        aspectRatio: 1.4, // Relación de aspecto (ancho / alto)
        marginTop: '15%',
        // Otros estilos según tus necesidades*/
      
      },
});

export default Header;
