import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {DataContext} from '../Context/DataContext';
import MapView, {PROVIDER_GOOGLE, Marker, Polygon} from 'react-native-maps';

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
      <MapView
        camera={{
          center: {
            latitude: 40.41661,
            longitude: -3.709261,
          },
          zoom: 15,
        }}
        provider={PROVIDER_GOOGLE}
        style={{width: '100%', height: '95%'}}
        zoomEnabled
        initialRegion={{
          latitude: 40.41661,
          longitude: -3.709261,
          latitudeDelta: 0.2,
          longitudeDelta: 0.095,
        }}>
        <Polygon fillColor="lightyellow" coordinates={polygonCoords} />
        {pois.map((marker, index) => {
          return (
            <Marker
              onPress={() => handleModal(marker)}
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.name}
              description={marker.description}>
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

      <TouchableOpacity onPress={() => navigation.navigate('PoisList')}>
        <Text>MOSTRAR EN LISTADO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PoisMap;
