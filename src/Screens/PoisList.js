import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {DataContext} from '../Context/DataContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PoisList = ({navigation}) => {
  const {data, modalVisible, setModalVisible, setSelectedMarker} =
    useContext(DataContext);
  const pois = data?.pois;
  console.log(data);

  const handleModal = marker => {
    setSelectedMarker(marker);
    setModalVisible(!modalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#3a3a3a',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'white', fontSize: 22}}>
          {data?.name.slice(15)}
        </Text>

        <View
          style={{
            backgroundColor: '#3a3a3a',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Ionicons name="location-sharp" size={25} color="white" />
          <Text style={{color: 'white', fontSize: 22}}>{data?.pois_count}</Text>
        </View>
        <View>
          <Ionicons name="menu" size={25} color="white" />
        </View>
      </View>
      <View style={{backgroundColor: '#202020', height: 50}}>
        <Text style={{color: 'white'}}>
          Ordenar: <Text style={{fontWeight: 'bold'}}>Popularidad</Text>
        </Text>
      </View>

      <FlatList
        data={pois}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => handleModal(item)}>
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
