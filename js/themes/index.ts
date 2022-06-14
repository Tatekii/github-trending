import {DarkTheme, DefaultTheme} from '@react-navigation/native';

export const MyDarkTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    contentBackground: '#0d1117',
    insetBackground: '#010409',
    topBarBackground: '#161b22',
    secondTextColor: '#f0f6fc',
    primaryTextColor: '#c9d1d9',
    borderColor: '#30363d',
    indicatorColor: '#006eed',
  },
};

export const MyLightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    contentBackground: '#f1f2f3',
    insetBackground: 'blue',
    topBarBackground: 'gray',
    secondTextColor: '#f0f6fc',
    primaryTextColor: '#1c1e21',
    borderColor: '#525860;',
    indicatorColor: '#54a3ff',
  },
};

export default MyDarkTheme;
