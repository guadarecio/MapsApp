import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {DataProvider} from './src/Context/DataContext';
import RootNavigator from './src/Navigator/RootNavigator';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DataProvider>
        <RootNavigator />
      </DataProvider>
    </SafeAreaView>
  );
}
