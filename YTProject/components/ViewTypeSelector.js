import React, { useState } from 'react';
import React, { useRef, useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SuggestionBox from './SuggestionBox'; // Importa el componente de la caja de sugerencias
import SwitchSelector from 'react-native-switch-selector';

const ViewTypeSelector = ({ onToggle, videosList }) => {
  const [searchMode, setSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const enterSearchMode = () => {
    setSearchMode(true);
  };

  const exitSearchMode = () => {
    setSearchMode(false);
    setSearchQuery('');
    setSuggestions([]);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filter restaurant names from videosList that match the query
    const matchedRestaurants = videosList.filter(video =>
      video.Restaurant.toLowerCase().includes(query.toLowerCase())
    );

    // Update suggestions with matched restaurant names
    setSuggestions(matchedRestaurants.map(video => video.Restaurant));
  };

  const handleSelectSuggestion = (restaurantName) => {
    // Set the search query to the selected suggestion
    setSearchQuery(restaurantName);

    // Clear suggestions
    setSuggestions([]);
  };

const ViewTypeSelector = ({ onToggle }) => {

  // Opciones para el interruptor (Mapa y Lista)

  const options = [
    { label: 'Mapa', value: 'Map' },
    { label: 'Lista', value: 'List' },
  ];

  if (searchMode) {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.icon}>
          <MaterialIcons name="arrow-back" size={30} color="white" onPress={exitSearchMode} />
        </View>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={(text) => handleSearch(text)}
          />
          {suggestions.length > 0 && (
            <SuggestionBox
              suggestions={suggestions}
              onSelectSuggestion={handleSelectSuggestion}
            />
          )}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.selector}>
      {/* Interruptor central */}
      <SwitchSelector
        options={options}
        initial={0}
        onPress={onToggle}
        buttonColor='orange'
        hasPadding
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
    color: 'black',
    fontSize: 16,
  },
  selectedSwitchText: {
    color: 'black',
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    color: 'black',
    fontSize: 16,
    marginLeft: 0,
  },
});
}

export default ViewTypeSelector;
