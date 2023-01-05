import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DataContext} from '../../Context/DataContext';

const ModalHeader = ({imageUrl, name}) => {
  const data = useContext(DataContext);
  const {modalVisible, setModalVisible} = data;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={{uri: imageUrl}} style={{width: 40, height: 40}} />
        <Text style={{fontSize: 20, paddingLeft: 10}}>
          {name?.toUpperCase()}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setModalVisible(!modalVisible)}
        style={{
          width: 35,
          height: 35,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#cccccc', fontSize: 22}}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeader;

const styles = StyleSheet.create({});
