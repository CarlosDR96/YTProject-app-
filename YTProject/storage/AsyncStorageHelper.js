import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveFavorites = async (favorites) => {
  try {
    const jsonValue = JSON.stringify(favorites);
    await AsyncStorage.setItem('@favorites', jsonValue);
    console.log('Favorites saved successfully');
  } catch (e) {
    console.error('Failed to save favorites.', e);
  }
};

export const loadFavorites = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@favorites');
    console.log("jsonValue from @favorites: ", jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Failed to fetch favorites.', e);
    return [];
  }
};


export const resetVariable = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log(`La variable ${key} ha sido reseteada.`);
    } catch (error) {
      console.error(`Error al resetear la variable ${key}:`, error);
    }
  }; 