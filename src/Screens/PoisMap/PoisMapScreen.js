import React, {useContext} from 'react';
import {View} from 'react-native';
import {DataContext} from '../../Context/DataContext';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import PoisMap from './PoisMap';
import Loader from '../../Components/Loader';

const PoisMapScreen = () => {
  const {data, loading} = useContext(DataContext);
  const pois = data?.pois.slice(0, 11);
  const polygonCoord = data?.coordinates.split('0.0 ');

  if (loading) return <Loader />;

  return (
    <View style={{flex: 1}}>
      <Header
        name={data?.name.toUpperCase().slice(15)}
        poisCount={data?.pois_count}
        menuColor="#f35412"
      />
      <PoisMap polygonCoords={polygonCoord} pois={pois} />
      <Footer title="MOSTRAR EN LISTADO" iconName="list" />
    </View>
  );
};

export default PoisMapScreen;
