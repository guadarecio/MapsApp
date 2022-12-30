import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DataContext} from '../Context/DataContext';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const PoisMap = ({navigation}) => {
  const pois = useContext(DataContext);

  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{width: '100%', height: '95%'}}
        initialRegion={{
          latitude: 40.419068,
          longitude: -3.701618,
          latitudeDelta: 0.2,
          longitudeDelta: 0.095,
        }}
      />

      <TouchableOpacity onPress={() => navigation.navigate('PoisList')}>
        <Text>MOSTRAR EN LISTADO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PoisMap;
