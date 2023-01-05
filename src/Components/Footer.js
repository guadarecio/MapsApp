import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Footer = ({title, iconName}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(
          title === 'MOSTRAR EN MAPA' ? 'PoisMap' : 'PoisList',
        )
      }
      style={styles.btn}>
      <Text style={{color: '#cccccc', fontWeight: 'bold', fontSize: 16}}>
        {title}
      </Text>
      <Ionicons name={iconName} size={25} color="#cccccc" />
    </TouchableOpacity>
  );
};

export default Footer;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#676767',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
