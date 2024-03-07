import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailsScreen from './screens/DetailsScreen';
import AboutScreen from './screens/AboutScreen';
import PollScreen from './screens/PollScreen';


const Stack = createStackNavigator();

const App = () => {

  useEffect(() => { 


  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerShown="false">
        {/* SplashScreen se mostrará inicialmente */}
        <Stack.Screen name="Splash" component={SplashScreen} />

        {/* HomeScreen se mostrará después de 10 segundos */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Poll" component={PollScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        {/*<Stack.Screen name="About" component={AboutScreen} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
