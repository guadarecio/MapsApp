import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PoisMap from '../Screens/PoisMap';
import PoisList from '../Screens/PoisList/PoisScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
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
              <Icon
                name="calendar"
                size={20}
                color="#666666"
                style={{width: 40}}
              />
              <Icon name="location-arrow" size={25} color="#666666" />
            </>
          ),
          headerTintColor: '#666666',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
        }}>
        <Stack.Screen name="PoisList" component={PoisList} />
        <Stack.Screen name="PoisMap" component={PoisMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
