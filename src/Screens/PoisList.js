import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {DataContext} from '../Context/DataContext';

const PoisList = ({navigation}) => {
  const pois = useContext(DataContext);

  return (
    <View style={{flex: 1}}>
      <Text>Pois List</Text>

      <FlatList
        data={pois}
        renderItem={({item}) => {
          return (
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={{
                  uri: item.image.url,
                }}
                resizeMode={'cover'}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />

      <TouchableOpacity onPress={() => navigation.navigate('PoisMap')}>
        <Text>MOSTRAR EN MAPA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PoisList;
