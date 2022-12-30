import React, {createContext, useState, useEffect} from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [data, setData] = useState();

  const apiCall = async () => {
    const resolve = await fetch(
      `https://cityme-services.prepro.site/app_dev.php/api/districts/2`,
    );
    const result = await resolve.json();
    setData(result);
    console.log(result);
  };

  useEffect(() => {
    apiCall();
  }, []);
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
