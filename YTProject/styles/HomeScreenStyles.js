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
  searchContainer: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    width: '90%',
    margin: 20,
    top: 50, // Ajusta la posición vertical del popover
    left: 0, // Ajusta la posición horizontal del popover
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 15,
  },  
  btnContainer: {
   // position: 'absolute',
    flexDirection: 'row',
   // backgroundColor: 'blue',
   // top: '10%',
   // margin: 15,
    paddingTop: 7,
    justifyContent: 'space-evenly',
    width: '100%',

  },
  closeContainer: {
   // backgroundColor: 'red',
    padding: 5,

  },
  thumbsContainer: {
 //  backgroundColor: 'green',
    padding: 5,

  },
  input: {
    margin: 5,
    marginBottom: 10,
  },
  filterContainer: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    width: '90%',
    margin: 20,
    top: 50, // Ajusta la posición vertical del popover
    left: 0, // Ajusta la posición horizontal del popover
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 15,
    maxHeight: 110,

  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
    marginTop: 3,
  },
  tagContainer: {
    backgroundColor: 'grey',
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

export default styles;
