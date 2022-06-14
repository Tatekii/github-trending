import React, {useState} from 'react';
import {LogBox, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './js/navigators/rootNavigator';
import useInterval from './js/hooks/useInterval';
import {NavigationContainer} from '@react-navigation/native';
import {MyDarkTheme, MyLightTheme} from './js/themes';

LogBox.ignoreLogs(['Remote debugger']);

function App() {
  // const [showAd, setShowAd] = useState(true);
  // const [second] = useInterval(() => setShowAd(() => false), 3);

  const scheme = useColorScheme(); // theme
  console.log(scheme);

  return (
    <SafeAreaProvider>
      {/* // TODO <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : DefaultTheme}> */}
      <NavigationContainer
        theme={scheme === 'dark' ? MyDarkTheme : MyLightTheme}>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );

  // TODO showAd ? <Welcome second={second} /> : <RootNavigator />;
}

export default App;
