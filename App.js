import * as React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {DataProvider} from './src/Context/DataContext';
import RootNavigator from './src/Navigator/RootNavigator';
import AppModal from './src/Screens/Modal/Modal';

export default function App() {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#cccccc'}} />
      <SafeAreaView style={{flex: 1, backgroundColor: '#666666'}}>
        <StatusBar barStyle="light-content" />
        <DataProvider>
          <RootNavigator />
          <AppModal />
        </DataProvider>
      </SafeAreaView>
    </>
  );
}
