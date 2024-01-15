import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SwitchSelector from 'react-native-switch-selector';

const NavBar = ({ onToggle }) => {
  // Opciones para el interruptor (Mapa y Lista)
  const options = [
    { label: 'Map', value: 'Map' },
    { label: 'List', value: 'List' },
  ];

  return (
    <View style={styles.navBar}>
      {/* Imagen de la lupa a la izquierda */}
      <Image source={require('../img/SearchIcon.png')} style={styles.icon} />

      {/* Interruptor central */}
      <SwitchSelector
        options={options}
        initial={0}
        onPress={onToggle}
        buttonColor="lightgray"
        borderColor="#fff"
        textStyle={styles.switchText}
        style={styles.switchContainer}
      />

      {/* Imagen de los filtros a la derecha */}
      <Image source={require('../img/FilterIcon.png')} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Centrar verticalmente las imágenes
    backgroundColor: '#3F3F3F',
    paddingHorizontal: 16,
    height: '100%',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    flex: 0.2,
  },
  switchContainer: {
    flex: 0.6,
    width: 80,
  },
  switchText: {
    color: 'black',
  },
});

export default NavBar2;
