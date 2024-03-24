import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, } from 'react-native';
import ViewTypeSelector from '../components/ViewTypeSelector';
import NavBar from '../components/NavBar';
import Header from '../components/Header'; // Importa el componente Header
import logo from '../img/SezarBlueLogo.png';
import MapComponent from '../components/MapComponent';
import styles from '../styles/HomeScreenStyles'; // Adjust the import path as necessary
import { TouchableOpacity } from 'react-native-gesture-handler';
import TouchableCard from '../components/TouchableCard';
import VideoManager from '../utils/VideoManager';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SuggestionBox from '../components/SuggestionBox';
import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = ({ navigation }) => {
  const [viewType, setViewType] = useState('Map');
  const [videosList, setVideosList] = useState([]);
  const [tagsList, setTagsList] = useState([]);
  const [searchIsPressed, setSearchIsPressed] = useState(false);
  const [filterIsPressed, setFilterIsPressed] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [savedSearchText, setSavedSearchText] = useState('Escribe aquí lo que deseas buscar'); // Nuevo estado para guardar el texto de búsqueda

  const [searchMode, setSearchMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const enterSearchMode = () => {
    setSearchMode(true);
  };

  const exitSearchMode = () => {
    setSearchMode(false);
    setSearchQuery('');
    setSuggestions([]);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filter restaurant names from videosList that match the query
    const matchedRestaurants = videosList.filter(video =>
      video.Restaurant.toLowerCase().includes(query.toLowerCase())
    );

    // Update suggestions with matched restaurant names
    setSuggestions(matchedRestaurants.map(video => video.Restaurant));
  };

  const handleSelectSuggestion = (restaurantName) => {
    // Set the search query to the selected suggestion
    setSearchQuery(restaurantName);

    // Clear suggestions
    setSuggestions([]);
  };



  const handleSearchPress = () => {

    setSearchIsPressed(!searchIsPressed);
    // Si searchIsPressed está activo, desactiva filterIsPressed
    if (!searchIsPressed) {
      setFilterIsPressed(false);
      // Restablece el texto de búsqueda a una cadena vacía
      setSearchText('');
      // Guarda el texto de búsqueda antes de abrir el filtro
      setSavedSearchText(searchText);
    }
  };
  
  
  const handleFilterPress = () => {
    setFilterIsPressed(!filterIsPressed);
    // Si filterIsPressed está activo, desactiva searchIsPressed
    if (!filterIsPressed) {
      setSearchIsPressed(false);
    }
  };
  

  const handleTagPress = (tagName) => {
    if (selectedTags.includes(tagName)) {
      setSelectedTags(selectedTags.filter(tag => tag !== tagName));
    } else {
      setSelectedTags([...selectedTags, tagName]);
    }
  };

  const onClosePress = () => {
    setSearchIsPressed(false);
    // Restablece el texto de búsqueda cuando se cierra el filtro
    setSearchText('')
  };

  const onPress = (item, index) => {
    navigation.navigate('Details', { videoData: item, tagsIndex: index, tagsList });
    console.log('card clicked');
  };

  const toggleViewType = (newType) => {
    if (newType !== viewType) {
      setViewType(newType);
    }
  };

  const recieveVideoData = (data) => {
    setVideosList(data)
  };
  
  const recieveTagsData = (data) => {
    setTagsList(data)
  };

  useEffect(() => { 
    VideoManager.subscribe(recieveVideoData, 1); 
    VideoManager.subscribe(recieveTagsData, 2);
    console.log("He entrat a home screen");
  }, []);

  return  (
    <View style={styles.container}>
    {!searchIsPressed && !filterIsPressed ? (
      <Header imageSource={logo} />
    ) : (
      <View style={{ height: '20%' }} />
    )}

    <View style={styles.rowContainer}>
      <TouchableOpacity onPress={handleSearchPress}>
        <View style={styles.icon}>
          <MaterialIcons name="search" size={43} style={{ color: (searchText !== '') ? 'orange' : 'white' }} />
        </View>
      </TouchableOpacity>
      <View>
        <ViewTypeSelector onToggle={toggleViewType} selected={viewType}/>
      </View>
      <TouchableOpacity onPress={handleFilterPress}>
        <View style={styles.icon}>
          <MaterialIcons name="filter-alt" size={40} style={{ color: (selectedTags.length > 0) ? 'orange' : 'white' }}/>
        </View>
      </TouchableOpacity>
    </View>

    {searchIsPressed && (
      <View style={{ position: 'absolute', flex: 1, width: '100%', alignItems: 'center', zIndex: 2 }}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Escribe aquí lo que deseas buscar"
            style={styles.input}
            value={searchText} // Utiliza searchText como el valor del TextInput
            onChangeText={(text) => setSearchText(text)} // Actualiza searchText con el texto ingresado
          />

          {/* Línea naranja fina */}
          <View style={styles.orangeLine} />

          <View style={styles.btnContainer}>
            <View style={styles.closeContainer}>
              <TouchableOpacity style={styles.TouchableOpacity} onPress={onClosePress}>
                <FontAwesome padding={2} name="close" size={30} color='red' />
              </TouchableOpacity>
            </View>
            <View style={styles.thumbsContainer}>
              <TouchableOpacity style={styles.TouchableOpacity} onPress={handleSearchPress}>
                <FontAwesome padding={2} name="check" size={30} color='green' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )}


  {filterIsPressed && (
    <View style={{position: 'absolute', flex: 1, width: '100%', height:130, alignItems: 'center', zIndex: 2}}>
      <View style={styles.filterContainer}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView style={{width:'80%'}}>
            <View style={styles.tagsContainer}>
              {tagsList.map((tag, index) => (
                <TouchableOpacity key={index} onPress={() => handleTagPress(index)}>
                  <View
                    key={index}
                    style={[
                      styles.tagContainer,
                      {
                        backgroundColor: selectedTags.includes(index) ? 'black' : 'grey',
                      },
                    ]}
                  >
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                </TouchableOpacity>
              ))}
              
            </View>
          </ScrollView>
          <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => setSelectedTags([])}>
                <Feather name="delete" size={30} color='orange' />
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )}


      {/*

       <Tags tags={tagsList}></Tags>
      
      {tagsList.map((tag, index) => (
          <TouchableOpacity key={index} style={styles.tagContainer}>
              <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
           ))}
      </View>
       <View style={styles.map}>
         {/* Imagen de la lupa a la izquierda 
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.icon}>
            <MaterialIcons name="search" size={43} style={{ color: isPressed ? 'orange' : 'white' }} />
          </View>
        </TouchableOpacity>
        {isPressed && (
          <View>
            <Text>search</Text>
          </View>
        )}
          <ViewTypeSelector onToggle={toggleViewType} selected={viewType}/>
      </View>*/}
      <View style={{flex: 1}}>
      {viewType === 'Map' && videosList && videosList.length > 0 ? 
        (
          <MapComponent videosList={videosList} navigation={navigation} selectedTags={selectedTags}/> 
        ) : (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {videosList && tagsList.length > 0 ? (
              videosList
                .filter(item => searchText === '' || item.Title.toLowerCase().includes(searchText.toLowerCase())) // Aplica el filtro solo si searchText no está vacío
                .map((item, index) => {
                  // Verificar si todos los tags seleccionados están presentes en el objeto
                  const containsAllSelectedTags = selectedTags.every(tagName => item.Tags.includes(tagName));

                  if (selectedTags.length === 0 || containsAllSelectedTags) {
                    return (
                      <TouchableCard
                        onPress={() => onPress(item, index)} // Pasa todos los datos del video
                        key={index}
                        title={item.Title}
                        tags={item.Tags}
                        tagsList={tagsList}
                        desc={item.Description}
                        sourceImg={item.Youtube}
                      />
                    );
                  } else {
                    return null;
                  }
                })
            ) : (
              <Text style={styles.titulo}>Cargando...</Text>
            )}
          </ScrollView>


        )
      }
    </View>

          <NavBar Navbar navigation={navigation} videosList={videosList} />
    </View>
  );  
}
    

export default HomeScreen;
