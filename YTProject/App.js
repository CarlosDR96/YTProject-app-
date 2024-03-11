import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SplashScreen from './screens/SplashScreen';
import AboutScreen from './screens/AboutScreen';
import PollScreen from './screens/PollScreen';
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => { 


  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerShown="false">
        <Stack.Screen name="Splash" component={SplashScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Details" component={DetailsScreen}  options={{ animationEnabled: false, headerShown: false }}/>
        <Stack.Screen name="Poll" component={PollScreen} options={{ animationEnabled: false, headerShown: false }}/>
        <Stack.Screen name="About" component={AboutScreen} options={{ animationEnabled: false, headerShown: false }}/>
        <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ animationEnabled: false, headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
