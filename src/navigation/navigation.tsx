import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/welcome/welcome.screen';
import Home from '../screens/home/home.screen';
import {RootStackParamList} from './navigation.types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Welcome" component={Welcome} />
        <RootStack.Screen name="Main" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
