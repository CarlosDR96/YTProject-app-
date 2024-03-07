import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TouchablePollRow from './TouchablePollRow';

const PollItem = ({ rows, title }) => {
   const [pressedIndex, setPressedIndex] = useState(null);
   const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.pollTitle}>{title}</Text>
            </View>
            <View style={styles.rowsContainer}>
                {rows.map((row, index) => (
                     <TouchablePollRow
                     key={index}
                     option={row}
                     index={index}
                     selectedOptionIndex={selectedOptionIndex} // Pasa el índice seleccionado
                     setSelectedOptionIndex={setSelectedOptionIndex} // Pasa la función para actualizar el índice
                   />
                   
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '80%',
        overflow: 'hidden',
        borderRadius: 30,
        margin: 15,
    },
    titleContainer: {
        backgroundColor: '#4D4D4F',
        alignItems: 'center',
    },
    pollTitle: {
        color: 'white',
        fontSize: 23,
        margin: 10,
        fontweight:'bold',
    },
    rowsContainer: {
        backgroundColor: 'white',
        margin: 5,
    },
});

export default PollItem;
