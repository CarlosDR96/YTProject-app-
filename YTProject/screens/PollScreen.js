import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import NavBar from '../components/NavBar';
import logo from '../img/SezarBlueLogo.png';
import PollItem from '../components/PollItem';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Header from '../components/Header'; // Importa el componente Header
import { ScrollView } from 'react-native-gesture-handler';

const PollScreen = ({ navigation }) => {
    const rows = ['Opción 1', 'Opción 2', 'Opción 3', 'Opcion 4']; // Puedes ajustar esto según tus datos de encuesta
    const [pollsList, setPollsList] = useState([]);

    useEffect(() => { // Funció que es crida al començar. Ve a ser un OnCreate d'Android/start()
        // Función para obtener todos los usuarios
        const fetchPolls = async () => {
          try {
           // console.log(db);
            const pollsCol = collection(db, 'Polls'); // Accede a la colección 'Users'
            const pollsSnapshot = await getDocs(pollsCol); // Obtiene todos los documentos
            const pollsListData = pollsSnapshot.docs.map(doc => doc.data()); // Mapea cada documento a su data
            setPollsList(pollsListData);
        
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchPolls(); // Llama a la función al inicio

       // console.log(pollsList[0].Options)
      }, []);
    
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Header imageSource={logo} />
        </View>
        <ScrollView>
            <View style={styles.body}>
                {pollsList && pollsList.length > 0 ? (
                    pollsList.map((pollItem, index) => (
                    <PollItem key={index} rows={pollItem.Options} title={pollItem.Title}/>
                    ))
                    ):(
                        <Text style={styles.cargtext}>Cargando...</Text>
                    )}
            </View>
        </ScrollView>
        <View>
            <NavBar NavBar navigation={navigation} />
        </View>    
        
    </View>
    
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1212',
        justifyContent: 'space-between',
      },
      header: {
        height: '20%',
      },
      body: {
      //  backgroundColor: 'red',
        height: '70%',
        alignItems: 'center',

      },
      cargtext:{
        color: 'white',
        fontSize: 26,
        textAlign: 'center', // Center the text horizontally
        marginTop: 'auto', // Push the text to the center vertically
        marginBottom: 'auto', // Push the text to the center vertically
      },

})

export default PollScreen;
