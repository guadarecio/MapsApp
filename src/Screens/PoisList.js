import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {DataContext} from '../Context/DataContext';
import MapView from 'react-native-maps';

const PoisList = ({navigation}) => {
  const pois = useContext(DataContext);

  return (
    <View style={{flex: 1}}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default PoisList;
