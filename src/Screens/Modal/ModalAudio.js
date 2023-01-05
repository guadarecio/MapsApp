import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ModalAudio = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer} onPress={() => {}}>
        <View style={styles.play}>
          <TouchableOpacity>
            <Ionicons name="play-circle" size={50} color="#666666" />
          </TouchableOpacity>
          <View style={styles.bar} />
        </View>
      </View>
    </View>
  );
};

export default ModalAudio;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  subContainer: {
    backgroundColor: '#cccccc',
    width: '90%',
    height: 70,
    margin: 20,
    justifyContent: 'center',
  },

  play: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bar: {
    marginLeft: 10,
    height: 10,
    width: '70%',
    backgroundColor: '#666666',
  },
});
