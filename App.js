import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {DataProvider} from './src/Context/DataContext';
import RootNavigator from './src/Navigator/RootNavigator';
import AppModal from './src/Screens/Modal';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DataProvider>
        <RootNavigator />
        <AppModal />
      </DataProvider>
    </SafeAreaView>
  );
}
