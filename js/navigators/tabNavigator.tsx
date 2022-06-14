import React from 'react';
import Trending from '../screens/trending/trending.screen';
import Favorite from '../screens/favorite/favorite.screen';
import My from '../screens/my/my.screen';
import Home from '../screens/home/home.screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MainTabParamList} from './types';
import {useTheme} from '@react-navigation/native';

const TabStack = createBottomTabNavigator<MainTabParamList>();

const TabNavigator = () => {
  const {colors} = useTheme();
  console.log(colors);

  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <TabStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'home-circle' : 'home-circle-outline'}
                color={color}
                size={size}
              />
            );
          },
          tabBarBadge: 3,
        }}
      />
      <TabStack.Screen
        name="Trending"
        component={Trending}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'fire-circle' : 'fire'}
                color={color}
                size={size}></MaterialCommunityIcons>
            );
          },
        }}
      />
      <TabStack.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'heart-box' : 'heart-box-outline'}
                color={color}
                size={size}></MaterialCommunityIcons>
            );
          },
        }}
      />
      <TabStack.Screen
        name="My"
        component={My}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <MaterialCommunityIcons
                name={focused ? 'emoticon-cool' : 'emoticon-cool-outline'}
                color={color}
                size={size}></MaterialCommunityIcons>
            );
          },
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabNavigator;
