import React from 'react';
import Trending from '../screens/trending/trending.screen';
import Favorite from '../screens/favorite/favorite.screen';
import My from '../screens/my/my.screen';
import Home from '../screens/home/home.screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type TabStackParamList = {
  Home: undefined;
  Trending: undefined;
  Favorite: undefined;
  My: undefined;
};

const TabStack = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <MaterialCommunityIcons
                name="trending-up"
                color={color}
                size={size}
              />
            );
          },
          tabBarBadge: 3,
        }}
      />
      <TabStack.Screen name="Trending" component={Trending} />
      <TabStack.Screen name="Favorite" component={Favorite} />
      <TabStack.Screen name="My" component={My} />
    </TabStack.Navigator>
  );
};

export default TabNavigator;
