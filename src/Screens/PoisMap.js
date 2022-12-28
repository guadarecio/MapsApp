import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DataContext} from '../Context/DataContext';

const PoisMap = ({navigation}) => {
  const pois = useContext(DataContext);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pois Map</Text>

      <TouchableOpacity onPress={() => navigation.navigate('PoisList')}>
        <Text>MOSTRAR EN LISTADO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PoisMap;
