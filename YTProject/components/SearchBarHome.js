import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Cambia 'FontAwesome' por el tipo de ícono que desees

const NavigationComponent = () => {
  // Funciones para manejar la selección de map o list
  const handleMapPress = () => {
    // Lógica para el botón de mapa
    console.log('Seleccionaste Map');
  };

  const handleListPress = () => {
    // Lógica para el botón de lista
    console.log('Seleccionaste List');
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', paddingHorizontal: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* Icono izquierdo */}
        <TouchableOpacity onPress={handleMapPress}>
          <Image
            source={require('./ruta/imagenIcono1.png')} // Ruta de tu primer ícono
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
        </TouchableOpacity>
        {/* Icono derecho */}
        <TouchableOpacity onPress={handleListPress}>
          <Image
            source={require('./ruta/imagenIcono2.png')} // Ruta de tu segundo ícono
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row' }}>
        {/* Botón de Map */}
        <TouchableOpacity onPress={handleMapPress} style={{ paddingHorizontal: 10 }}>
          <Icon name="map-marker" size={25} color="black" /> {/* Cambia 'map-marker' por el nombre del ícono para el mapa */}
        </TouchableOpacity>
        {/* Botón de List */}
        <TouchableOpacity onPress={handleListPress} style={{ paddingHorizontal: 10 }}>
          <Icon name="list" size={25} color="black" /> {/* Cambia 'list' por el nombre del ícono para la lista */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationComponent;
