/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './src/screens/index'
import Success from './src/screens/Success'
import OTPScreen from './src/screens/OTPScreen';

function App(): JSX.Element {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName='home'>
        <Stack.Screen name='home'  component={Home}/>
        <Stack.Screen name='otp' component={OTPScreen} />
        <Stack.Screen name='success' component={Success} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
