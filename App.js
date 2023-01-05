import * as React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {DataProvider} from './src/Context/DataContext';
import RootNavigator from './src/Navigator/RootNavigator';
import AppModal from './src/Screens/Modal/Modal';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#cccccc'}}>
      <StatusBar barStyle="light-content" />
      <DataProvider>
        <RootNavigator />
        <AppModal />
      </DataProvider>
    </SafeAreaView>
  );
}
