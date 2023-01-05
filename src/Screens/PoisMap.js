import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {DataContext} from '../Context/DataContext';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  Polygon,
  Callout,
} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PoisMap = ({navigation}) => {
  const {data, modalVisible, setModalVisible, setSelectedMarker} =
    useContext(DataContext);
  const pois = data?.pois.slice(0, 11);

  const arrayDeCoords = data?.coordinates.split('0.0 ');
  const polygonCoords = arrayDeCoords?.map(el => {
    const sp = el.split(',');
    return {longitude: Number(sp[0]), latitude: Number(sp[1])};
  });

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
            backgroundColor: '#f35412',
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
      <MapView
        camera={{
          center: {
            latitude: 40.41661,
            longitude: -3.709261,
          },
          zoom: 15,
        }}
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        zoomEnabled
        initialRegion={{
          latitude: 40.41661,
          longitude: -3.709261,
          latitudeDelta: 0.2,
          longitudeDelta: 0.095,
        }}>
        <Polygon
          fillColor="rgba(243, 84, 18, 0.3)"
          strokeColor="white"
          strokeWidth={2}
          coordinates={polygonCoords}
        />
        {pois.map((marker, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}>
              <Callout
                style={styles.callout}
                tooltip
                alphaHitTest
                onPress={() => handleModal(marker)}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
                  {marker.name.toUpperCase()}
                </Text>
                <View style={{flexDirection: 'row', padding: 10}}>
                  <Text style={{color: '#cccccc', fontSize: 12}}>22:00</Text>
                  <Ionicons name="location" size={15} color="#f35412" />
                  <Text style={{color: '#f35412', fontSize: 12}}>
                    {marker.category.name.length > 21
                      ? `${marker.category.name.substring(0, 21)}...`
                      : marker.category.name}
                  </Text>
                </View>
              </Callout>
              <Image
                source={{uri: marker.category.marker.url}}
                style={{
                  width: 60,
                  height: 60,
                }}
                resizeMode="contain"
              />
            </Marker>
          );
        })}
      </MapView>

      <TouchableOpacity
        onPress={() => navigation.navigate('PoisList')}
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
          MOSTRAR EN LISTADO
        </Text>
        <Ionicons name="list" size={25} color="#cccccc" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  callout: {
    backgroundColor: '#202020',
    width: 200,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PoisMap;
