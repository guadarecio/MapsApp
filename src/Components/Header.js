import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({name, poisCount, menuColor}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{name}</Text>
      <View style={[styles.menu, {backgroundColor: menuColor}]}>
        <View style={styles.location}>
          <Ionicons name="location-sharp" size={25} color="white" />
          <Text style={{color: 'white', fontSize: 22, paddingLeft: 5}}>
            {poisCount}
          </Text>
        </View>
        <View
          style={{width: 40, justifyContent: 'center', alignItems: 'center'}}>
          <Ionicons name="menu" size={25} color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3a3a3a',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 5,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    backgroundColor: '#3a3a3a',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
  },
});

export default Header;
