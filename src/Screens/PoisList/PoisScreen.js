import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {DataContext} from '../../Context/DataContext';
import Header from '../../Components/Header';
import PoisFilter from './PoisFilter';
import PoisList from './PoisList';
import Footer from '../../Components/Footer';

const PoisScreen = () => {
  const {data} = useContext(DataContext);
  const pois = data?.pois;

  return (
    <View style={{flex: 1}}>
      <Header
        name={data?.name.toUpperCase().slice(15)}
        poisCount={data?.pois_count}
        menuColor="black"
      />
      <PoisFilter />
      <PoisList pois={pois} />
      <Footer title="MOSTRAR EN MAPA" iconName="map" />
    </View>
  );
};

export default PoisScreen;
