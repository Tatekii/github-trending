import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopTabPage from '../../components/topTabPage/topTabPage.component';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const TopTabStack = createMaterialTopTabNavigator();

const Home = () => {
  const insets = useSafeAreaInsets();
  return (
    <TopTabStack.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: 'yellow', paddingTop: insets.top},
      }}>
      <TopTabStack.Screen name="toptab1" component={TopTabPage} />
      <TopTabStack.Screen name="toptab2" component={TopTabPage} />
    </TopTabStack.Navigator>
  );
};

export default Home;
