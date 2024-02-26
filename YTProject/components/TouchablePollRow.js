import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const TouchablePollRow = ({option, index, selectedOptionIndex, setSelectedOptionIndex}) => {
    const [pressed, setPressed] = useState(false);
 /*   const [selectedOptionIndex, setSelectedOptionIndex] = useState(false);
    const [previousOptionIndex, setPreviousOptionIndex] = useState(-1); // Estado para rastrear el índice anterior*/

    const handlePress = () => {
        if (selectedOptionIndex === index) {
          // Si la opción ya está seleccionada, deselecciónala
          setSelectedOptionIndex(-1);
        } else {
          // Si se selecciona una nueva opción, actualiza el índice
          setSelectedOptionIndex(index);
        }
      };

    return (
        <TouchableOpacity
            style={[
                styles.rowContainer,
                selectedOptionIndex === index ? { backgroundColor: 'orange' } : { backgroundColor: '#DADBDD' },
            ]}
            onPress={handlePress}
            >
            <Text style={styles.rowText}>{option}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({

rowContainer: {
   // backgroundColor: '#DADBDD',
    margin: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderRadius: 15,
},
rowText: {
    color: 'black',
    fontSize: 16,
},
});

export default TouchablePollRow;