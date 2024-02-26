import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PollItem = ({ rows, title }) => {
    const [pressedIndex, setPressedIndex] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.pollTitle}>{title}</Text>
            </View>
            <View style={styles.rowsContainer}>
                {rows.map((row, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.rowContainer,
                            pressedIndex === index && { backgroundColor: '#orange' }, // Cambia el color al presionar
                        ]}
                        onPress={() => setPressedIndex(index)} // Actualiza el estado al presionar
                    >
                        <Text style={styles.rowText}>{row}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '70%',
        overflow: 'hidden',
        borderRadius: 30,
        margin: 15,
    },
    rowText: {
        color: 'black',
        fontSize: 16,
    },
    titleContainer: {
        backgroundColor: '#4D4D4F',
        alignItems: 'center',
    },
    pollTitle: {
        color: 'white',
        fontSize: 23,
        margin: 10,
    },
    rowsContainer: {
        backgroundColor: 'white',
        margin: 5,
    },
    rowContainer: {
        backgroundColor: '#DADBDD',
        margin: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: 'black',
        borderRadius: 15,
    },
});

export default PollItem;
