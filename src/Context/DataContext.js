import React, {createContext, useState, useEffect} from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState({});

  const apiCall = async () => {
    try {
      setLoading(true);
      const resolve = await fetch(
        `https://cityme-services.prepro.site/app_dev.php/api/districts/2`,
      );
      const result = await resolve.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      alert('Error en llamar los datos');
      setLoading(false);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  const handleModal = marker => {
    setSelectedMarker(marker);
    setModalVisible(!modalVisible);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        modalVisible,
        setModalVisible,
        selectedMarker,
        handleModal,
        loading,
      }}>
      {children}
    </DataContext.Provider>
  );
};
