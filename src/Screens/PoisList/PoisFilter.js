import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PoisFilter = () => {
  return (
    <View style={styles.filter}>
      <Text style={{color: 'white', paddingLeft: 5}}>
        Ordenar: <Text style={{fontWeight: 'bold'}}>Popularidad</Text>
      </Text>
      <Text style={styles.points}>...</Text>
    </View>
  );
};

export default PoisFilter;

const styles = StyleSheet.create({
  filter: {
    backgroundColor: '#202020',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  points: {
    color: 'white',
    paddingRight: 10,
    fontSize: 20,
  },
});
