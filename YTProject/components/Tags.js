import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tags = ({ tags }) => {

  return (
    <View style={styles.tagsContainer}>
      {tags.map((tag, index) => (
        <View key={index} style={styles.tagContainer}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
    marginTop: 3,
  },
  tagContainer: {
    backgroundColor: 'orange',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 3,
  },
  tagText: {
    color: 'white',
    fontSize: 10, // Tamaño de la letra de los tags
  },
});

export default Tags;
