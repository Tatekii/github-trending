import * as React from 'react';
import {LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './src/navigation/navigation';
LogBox.ignoreLogs(['Remote debugger']);
export default function App() {
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
}
