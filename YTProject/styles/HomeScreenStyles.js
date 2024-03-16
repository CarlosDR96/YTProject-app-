import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1212',
  },
  scrollContainer: {
    alignItems: 'center',
  //  paddingVertical: 20,
  },
  header: {
  //  height: '20%',
  },
  map: {
    //backgroundColor: 'blue',
    height: '10%',
  },
  titulo:{
    color: 'white',
    fontSize: 16,
    alignItems:'center',
  },
  icon: {
    //width: 60, // Adjust as needed
    //height: 60, // Adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
    //position: 'absolute',
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: '7%',
   // backgroundColor: 'red',
    justifyContent: 'center',
    padding: 5,
  },
});

export default styles;
