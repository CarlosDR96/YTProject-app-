import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SuggestionBox = ({ suggestions, onSelectSuggestion }) => {
  return (
    <View style={styles.container}>
      {suggestions.map((suggestion, index) => (
        <TouchableOpacity
          key={index}
          style={styles.suggestionItem}
          onPress={() => onSelectSuggestion(suggestion)}
        >
          <Text>{suggestion}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60, // Ajusta esta posición según tu diseño
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    elevation: 3,
    zIndex: 999, // Ajusta el zIndex según sea necesario
  },
  suggestionItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SuggestionBox;
