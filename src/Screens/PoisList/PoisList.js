import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DataContext} from '../../Context/DataContext';

const PoisList = ({pois}) => {
  const {handleModal} = useContext(DataContext);

  return (
    <FlatList
      data={pois}
      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={() => handleModal(item)}>
            <View style={styles.list}>
              <Image
                source={{uri: item.image.url}}
                resizeMode={'cover'}
                style={{width: 100, height: 80}}
              />
              <View style={styles.title}>
                <Text>{item.name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{paddingRight: 5}}> {item.likes_count}</Text>
                  <Ionicons name="heart" size={25} color="#cccccc" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default PoisList;

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  title: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
});
