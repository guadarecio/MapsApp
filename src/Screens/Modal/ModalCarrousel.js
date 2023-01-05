import {View, FlatList, Image} from 'react-native';
import React from 'react';

const ImageCarrousel = ({data}) => {
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <Image
              source={{uri: item.url}}
              resizeMode="contain"
              style={{width: 300, height: 200}}
            />
          );
        }}
      />
    </View>
  );
};

export default ImageCarrousel;
