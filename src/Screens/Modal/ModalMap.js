import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ModalMap = ({likes, description, lat, long}) => {
  return (
    <>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontWeight: 'bold'}}>Acerca de este local:</Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{paddingRight: 15, color: '#cccccc'}}>{likes}</Text>
            <Ionicons name="heart" size={25} color="#cccccc" />
          </View>
        </View>
        <Text
          style={{
            color: '#666666',

            paddingHorizontal: 20,
          }}>
          {description}
        </Text>
      </View>
      <View style={{alignItems: 'center', padding: 20}}>
        <MapView
          camera={{
            center: {
              latitude: lat,
              longitude: long,
            },
            zoom: 15,
          }}
          provider={PROVIDER_GOOGLE}
          style={{width: '100%', height: 170}}
          scrollEnabled={false}
          initialRegion={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.2,
            longitudeDelta: 0.095,
          }}>
          <Marker
            coordinate={{
              latitude: lat,
              longitude: long,
            }}>
            <Image
              source={{
                uri: 'http://cityme.s3-website-eu-west-1.amazonaws.com/default/0001/02/9d4bf14631e3b5bc8114514d15e6d279567186fa.png',
              }}
              style={{
                width: 60,
                height: 60,
              }}
              resizeMode="contain"
            />
          </Marker>
        </MapView>
      </View>
    </>
  );
};

export default ModalMap;

const styles = StyleSheet.create({});
