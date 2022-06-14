import React, {useState} from 'react';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './src/navigators/rootNavigator';
import Welcome from './src/screens/welcome/welcome.screen';
import useInterval from './src/hooks/useInterval';

LogBox.ignoreLogs(['Remote debugger']);

function App() {
  const [showAd, setShowAd] = useState(true);
  const [second] = useInterval(() => setShowAd(() => false), 3);

  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );

  // showAd ? <Welcome second={second} /> : <RootNavigator />;
}

export default App;
