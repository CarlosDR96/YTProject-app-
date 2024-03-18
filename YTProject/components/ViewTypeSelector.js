import React, { useRef, useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SwitchSelector from 'react-native-switch-selector';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ViewTypeSelector = ({ onToggle }) => {

  // Opciones para el interruptor (Mapa y Lista)
  const options = [
    { label: 'Mapa', value: 'Map' },
    { label: 'Lista', value: 'List' },
  ];

  return (
    <View style={styles.selector}>
     
      {/* Interruptor central */}
      <SwitchSelector
        options={options}
        initial={0}
        onPress={onToggle}
        buttonColor='orange' // Cambia el color del botón al mismo color que el fondo
        hasPadding // Añade un pequeño margen alrededor del botón
        textStyle={styles.switchText}
        selectedTextStyle={styles.selectedSwitchText}   
        style={styles.switchContainer}
      />

     
    </View>
  );
};

const styles = StyleSheet.create({
  selector: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center', // Centrar verticalmente las imágenes
    backgroundColor: '#1B1212',
    paddingHorizontal: 16,
    //height: '100%',
  },
 
  switchContainer: {
  //  flex: 1, // Take up remaining space
    minWidth: 250, // Set minimum width as needed
  },
  switchText: {
    color: 'black', // Cambia el color del texto a negro
    fontSize: 16, // Aumenta el tamaño del texto
  },
  selectedSwitchText: {
  color: 'black', // Change color of selected text to white
  fontSize: 16, // Keep the same font size or adjust as needed
},
});

export default ViewTypeSelector;
