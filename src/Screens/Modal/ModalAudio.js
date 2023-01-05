import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ModalAudio = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: '#cccccc',
          width: '90%',
          height: 70,
          margin: 20,
          justifyContent: 'center',
        }}
        onPress={() => {}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Ionicons name="play-circle" size={50} color="#666666" />
          </TouchableOpacity>
          <View
            style={{
              marginLeft: 10,
              height: 10,
              width: '70%',
              backgroundColor: '#666666',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ModalAudio;

const styles = StyleSheet.create({});
