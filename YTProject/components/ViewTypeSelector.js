import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
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
      {/* Imagen de la lupa a la izquierda */}
      <View style={styles.icon}>
        <MaterialIcons name="search" size={43} color="white" onPress={enterSearchMode} />
      </View>

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

      {/* Imagen de los filtros a la derecha */}
      <View style={styles.icon}>
        <MaterialIcons name="filter-alt" size={40} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1B1212',
    paddingHorizontal: 16,
    height: '100%',
    zIndex: 999,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: '100%',
  },
  textContainer: {
    alignItems: 'left',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    height: '50%',
    width: '75%',
    borderRadius: 50,
    position: 'relative',
  },
  icon: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchContainer: {
    flex: 1,
    minWidth: 200,
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

export default ViewTypeSelector;
