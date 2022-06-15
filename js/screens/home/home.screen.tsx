import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopTabPage from '../../components/topTabPage/topTabPage.component';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import style from './home.style';
import {useTheme} from '@react-navigation/native';

const TopTabStack = createMaterialTopTabNavigator();

const Home = () => {
  const insets = useSafeAreaInsets();
  const topics = ['Ios', 'Android', 'Java', 'C++', 'C#'];
  const {colors} = useTheme();
  return (
    <TopTabStack.Navigator
      screenOptions={{
        lazy: true,
        tabBarStyle: {
          ...style.tabBar,
          paddingTop: insets.top,
          backgroundColor: colors.background,
        },
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          // ...style.tabBarIndicator,
          // backgroundColor: colors.background,
        },
        // tabBarLabelStyle: {...style.tabBarLabel, color: colors.text},
      }}>
      {topics.map(t => {
        return (
          <TopTabStack.Screen name={t} key={t}>
            {() => <TopTabPage topic={t} />}
          </TopTabStack.Screen>
        );
      })}
    </TopTabStack.Navigator>
  );
};

export default Home;
