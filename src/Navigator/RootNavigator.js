import * as React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PoisMapScreen from '../Screens/PoisMap/PoisMapScreen';
import PoisListScreen from '../Screens/PoisList/PoisListScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const screenOptions = {
    title: '',
    headerStyle: {
      backgroundColor: '#cccccc',
    },
    headerLeft: () => (
      <Text style={{fontSize: 25, color: '#666666', fontWeight: 'bold'}}>
        MADRID
      </Text>
    ),
    headerRight: () => (
      <>
        <Icon name="calendar" size={20} color="#666666" style={{width: 40}} />
        <Icon name="location-arrow" size={25} color="#666666" />
      </>
    ),
    headerTintColor: '#666666',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="PoisList" component={PoisListScreen} />
        <Stack.Screen name="PoisMap" component={PoisMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
