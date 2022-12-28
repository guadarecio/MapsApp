import React, {createContext, useState, useEffect} from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [pois, setPois] = useState();

  const apiCall = async () => {
    const resolve = await fetch(
      `https://cityme-services.prepro.site/app_dev.php/api/districts/2`,
    );
    const result = await resolve.json();
    setPois(result.pois);
  };

  useEffect(() => {
    apiCall();
  }, []);
  return <DataContext.Provider value={pois}>{children}</DataContext.Provider>;
};
