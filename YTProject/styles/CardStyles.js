import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#262626',
      flexDirection: 'row',
      borderRadius: 8,
      margin: 10,
      overflow: 'hidden',
    },
    imagenContainer: {
      width: '30%',
    },
    imagen: {
      flex: 1,
      width: '100%',
      resizeMode: 'cover',
      borderRadius: 8,
      margin: 5,
    },
    contenidoContainer: {
      width: '70%',
      padding: 10,
    },
    titulo: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: 'white',
    },
    tags: {
      backgroundColor: '#f28b36',
      marginBottom: 5,
      color: 'white',
    },
    descripcion: {
      fontSize: 16,
      color: 'white',
    },
  });
  
  export default styles;