import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

const PoisFilter = () => {
  return (
    <View style={styles.filter}>
      <Text style={{color: 'white', paddingLeft: 5}}>
        Ordenar: <Text style={{fontWeight: 'bold'}}>Popularidad</Text>
      </Text>
      <Icon name="dots-three-horizontal" size={26} style={styles.points} />
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
  },
});
