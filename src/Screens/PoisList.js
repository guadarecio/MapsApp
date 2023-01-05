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
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: '600',
            paddingLeft: 5,
          }}>
          {data?.name.toUpperCase().slice(15)}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'black',
          }}>
          <View
            style={{
              backgroundColor: '#3a3a3a',
              height: 50,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingRight: 15,
            }}>
            <Ionicons name="location-sharp" size={25} color="white" />
            <Text style={{color: 'white', fontSize: 22}}>
              {data?.pois_count}
            </Text>
          </View>
          <View
            style={{width: 40, justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name="menu" size={25} color="white" />
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#202020',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', paddingLeft: 5}}>
          Ordenar: <Text style={{fontWeight: 'bold'}}>Popularidad</Text>
        </Text>
        <Text
          style={{
            color: 'white',
            paddingRight: 10,
            fontSize: 20,
          }}>
          ...
        </Text>
      </View>

      <FlatList
        data={pois}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => handleModal(item)}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',

                  borderBottomWidth: 1,
                  borderBottomColor: '#cccccc',
                }}>
                <Image
                  source={{
                    uri: item.image.url,
                  }}
                  resizeMode={'cover'}
                  style={{
                    width: 100,
                    height: 80,
                  }}
                />
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingHorizontal: 15,
                  }}>
                  <Text>{item.name}</Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        paddingRight: 5,
                      }}>
                      {item.likes_count}
                    </Text>
                    <Ionicons name="heart" size={25} color="#cccccc" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('PoisMap')}
        style={{
          backgroundColor: '#676767',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            color: '#cccccc',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          MOSTRAR EN MAPA
        </Text>
        <Ionicons name="map" size={25} color="#cccccc" />
      </TouchableOpacity>
    </View>
  );
};

export default PoisList;
