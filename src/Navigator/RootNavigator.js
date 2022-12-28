import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PoisMap from '../Screens/PoisMap';
import PoisList from '../Screens/PoisList';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PoisList" component={PoisList} />
        <Stack.Screen name="PoisMap" component={PoisMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
