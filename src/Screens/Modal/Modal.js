import React, {useContext} from 'react';
import {Modal, StyleSheet, View, ScrollView} from 'react-native';
import {DataContext} from '../../Context/DataContext';
import ModalHeader from './ModalHeader';
import ModalCarrousel from './ModalCarrousel';
import ModalAudio from './ModalAudio';
import ModalMap from './ModalMap';
import ModalEvents from './ModalEvents';

const AppModal = () => {
  const data = useContext(DataContext);
  const {modalVisible, selectedMarker} = data;
  const {
    category,
    name,
    gallery_images,
    likes_count,
    description,
    latitude,
    longitude,
  } = selectedMarker;

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <ScrollView style={styles.centeredView}>
        <View style={styles.modalView}>
          <ModalHeader imageUrl={category?.icon.url} name={name} />
          <ModalCarrousel data={gallery_images} />
          <ModalAudio />
          <ModalMap
            likes={likes_count}
            description={description}
            lat={latitude}
            long={longitude}
          />
          <ModalEvents />
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 90,
    backgroundColor: 'rgba(102, 102, 102, 0.95)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default AppModal;
