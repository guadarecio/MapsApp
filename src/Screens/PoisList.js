import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {DataContext} from '../Context/DataContext';

const PoisList = ({navigation}) => {
  const data = useContext(DataContext);
  const pois = data?.pois;

  return (
    <View style={{flex: 1}}>
      <Text>Pois List</Text>

      <FlatList
        data={pois}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginRight: 20,
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
                <Text>{item.likes_count}</Text>
              </View>
            </TouchableOpacity>
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
