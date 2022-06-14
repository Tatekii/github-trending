import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from '../screens/detail/detail.screen';
import TabNavigator from './tabNavigator';
import {RootStackParamList} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Main" component={TabNavigator} />
      <RootStack.Screen name="Detail" component={Detail} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
