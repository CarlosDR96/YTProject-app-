import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import Icon from 'react-native-vector-icons/FontAwesome'; // Otra librería de íconos que desees utilizar

const NavigationComponent = ({ map = 'MAPA', list = 'LLISTA' }) => {
  const [selectedOption, setSelectedOption] = useState(map); // Estado para almacenar la opción seleccionada

  const handleSearchPress = () => {
    console.log('Presionaste Buscar');
    // Lógica para el botón de búsqueda
  };

  const handleFilterPress = () => {
    console.log('Presionaste Filtrar');
    // Lógica para el botón de filtrar
  };

  const options = [
    { label: map, value: map },
    { label: list, value: list }
  ];

  const handleSwitchChange = (value) => {
    setSelectedOption(value);
    value === map ? handleMapPress() : handleListPress();
  };

  const handleMapPress = () => {
    console.log('Seleccionaste Mapa');
    // Lógica para la opción de mapa
  };

  const handleListPress = () => {
    console.log('Seleccionaste Lista');
    // Lógica para la opción de lista
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, backgroundColor: '#3f3f3f', paddingHorizontal: 20 }}>
      {/* Selector con dos opciones: Mapa y Lista */}
      <SwitchSelector
        options={options}
        initial={0}
        textColor="#000"
        selectedColor="#ccc"
        buttonColor="#000"
        borderColor="#000"
        backgroundColor="#fff"
        onPress={handleSwitchChange}
        style={{ flex: 0.9, marginRight: 20 }}
      />

      {/* Contenedor para los botones de Buscar y Filtrar */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={handleSearchPress} style={{ marginRight: 10 }}>
          <Image
            source={require('../img/SearchIcon.png')} // Ruta de tu ícono de búsqueda
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFilterPress}>
          <Image
            source={require('../img/FilterIcon.png')} // Ruta de tu ícono de filtrar
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationComponent;
