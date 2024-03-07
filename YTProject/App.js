// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import DetailsScreen from './screens/DetailsScreen';
import AboutScreen from './screens/AboutScreen';
import PollScreen from './screens/PollScreen';
import FavoritesScreen from './screens/FavoritesScreen'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerShown="false">
        {/* SplashScreen se mostrará inicialmente */}
        <Stack.Screen name="Splash" component={SplashScreen} />

        {/* HomeScreen se mostrará después de 10 segundos */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Poll" component={PollScreen} options={{ animationEnabled: false }}/>
        <Stack.Screen name="About" component={AboutScreen} options={{ animationEnabled: false }}/>
        <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ animationEnabled: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
