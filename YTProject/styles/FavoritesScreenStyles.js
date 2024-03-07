// ProfileScreenStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1212',
    justifyContent: 'space-between',
  },
  text1:{
    color: 'white',
    fontSize: 30,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    backgroundColor: 'red',
    height: '20%',
  },
  text: {
    fontSize: 18,
    color: '#333',  // Dark text for contrast
    marginTop: 20,  // Or any appropriate value for spacing from the top
  },
  text2: {
    color: 'white',
    fontSize: 15,
    marginTop: 10, // Adjust the margin as needed
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 30, // Adjust the marginTop as needed
  },
  // ... other styles ...
});

export default styles;
