import React, {useContext, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {DataContext} from '../Context/DataContext';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const AppModal = () => {
  const data = useContext(DataContext);
  const {modalVisible, setModalVisible, selectedMarker} = data;

  console.log('9999', selectedMarker);

  if (!data) return <Text>loading</Text>;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <ScrollView style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{selectedMarker.name}</Text>
          <Image
            source={{uri: selectedMarker?.image?.url}}
            style={{
              width: '100%',
              height: 120,
            }}
          />
          <View
            style={{
              margin: 25,
              backgroundColor: 'lightblue',
              width: '100%',
              height: 60,
            }}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => {}}>
              <Text style={styles.textStyle}>Play audio</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Acerca de este local:</Text>
              <Text> {selectedMarker.likes_count}</Text>
            </View>
            <Text> {selectedMarker.description}</Text>
            <MapView
              camera={{
                center: {
                  latitude: 40.41661,
                  longitude: -3.709261,
                },
                zoom: 18,
              }}
              provider={PROVIDER_GOOGLE}
              style={{width: 270, height: 170, marginVertical: 25}}
              initialRegion={{
                latitude: selectedMarker.latitude,
                longitude: selectedMarker.longitude,
                latitudeDelta: 0.2,
                longitudeDelta: 0.095,
              }}>
              <Marker
                coordinate={{
                  latitude: 40.41661,
                  longitude: -3.709261,
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

            <Text>Eventos:</Text>
            {selectedMarker?.events?.length > 0 ? (
              <FlatList
                data={selectedMarker.events}
                renderItem={({item}) => <Text>elemento</Text>}
              />
            ) : (
              <Text>No hay eventos disponibles.</Text>
            )}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,

    paddingTop: 60,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    height: '90%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AppModal;
