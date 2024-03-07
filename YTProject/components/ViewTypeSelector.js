import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SwitchSelector from 'react-native-switch-selector';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ViewTypeSelector = ({ onToggle }) => {
  // Opciones para el interruptor (Mapa y Lista)
  const options = [
    { label: 'Map', value: 'Map' },
    { label: 'List', value: 'List' },
  ];

  return (
    <View style={styles.selector}>
      {/* Imagen de la lupa a la izquierda */}
      <View style={styles.icon}>
        <MaterialIcons name="search" size={43} color="white"/>
      </View>

      {/* Interruptor central */}
      <SwitchSelector
        options={options}
        initial={0}
        onPress={onToggle}
        buttonColor='orange' // Cambia el color del botón al mismo color que el fondo
        hasPadding // Añade un pequeño margen alrededor del botón
        textStyle={styles.switchText}
        style={styles.switchContainer}
      />

      {/* Imagen de los filtros a la derecha */}
      <View style={styles.icon}>
        <MaterialIcons name="filter-alt" size={40} color="white"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Centrar verticalmente las imágenes
    backgroundColor: '#1B1212',
    paddingHorizontal: 16,
    height: '100%',
  },
  icon: {
    width: 60, // Adjust as needed
    height: 60, // Adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchContainer: {
    flex: 1, // Take up remaining space
    minWidth: 200, // Set minimum width as needed
  },
  switchText: {
    color: 'black', // Cambia el color del texto a negro
    fontSize: 16, // Aumenta el tamaño del texto
  },
});

export default ViewTypeSelector;
