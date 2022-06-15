import React, {useState} from 'react';
import {LogBox, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './js/navigators/rootNavigator';
import useInterval from './js/hooks/useInterval';
import {NavigationContainer} from '@react-navigation/native';
import {MyDarkTheme, MyLightTheme} from './js/themes';
import {setupStore} from './js/store';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreLogs(['Remote debugger']);

// redux store
const store = setupStore();

// persis store
const persistor = persistStore(store);

function App() {
  // const [showAd, setShowAd] = useState(true);
  // const [second] = useInterval(() => setShowAd(() => false), 3);

  const scheme = useColorScheme(); // theme
  console.log('[THEME]=>', scheme);

  return (
    <SafeAreaProvider>
      {/* // TODO <NavigationContainer theme={scheme === 'dark' ? MyDarkTheme : DefaultTheme}> */}
      <NavigationContainer
        theme={scheme === 'dark' ? MyDarkTheme : MyLightTheme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RootNavigator />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );

  // TODO showAd ? <Welcome second={second} /> : <RootNavigator />;
}

export default App;
