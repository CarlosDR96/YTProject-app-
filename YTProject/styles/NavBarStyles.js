import { StyleSheet, Dimensions  } from 'react-native';

export const iconSizes = {
    small: 20,
    medium: 25,
    large: 30,
  };

  const screenHeight = Dimensions.get('window').height; // Get screen height

  const styles = StyleSheet.create({
    navBar: {
      height: screenHeight * 0.10, // 10% of the screen height
      flexDirection: 'row', // Align items in a row
      justifyContent: 'space-around', // Evenly space the items
      alignItems: 'center', // Center items vertically
    },
    navItem: {
      flexDirection: 'column', // Icon and text in a row
      alignItems: 'center',
    },
    navText: {
        color: 'white', 
        fontSize: 12, // White color for the text
        marginTop: screenHeight * 0.01,
    }
    // Add other styles if needed
  });
  
  export default styles;