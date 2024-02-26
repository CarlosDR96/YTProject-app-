// ProfileScreenStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1212',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    backgroundColor: 'red',
    height: '20%',
  },
  map: {
    backgroundColor: 'blue',
    height: '10%',
  },
  text: {
    fontSize: 18,
    color: '#333',  // Dark text for contrast
    marginTop: 20,  // Or any appropriate value for spacing from the top
  },
  // ... other styles ...
});

export default styles;
