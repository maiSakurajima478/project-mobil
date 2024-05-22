import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [apps, setApps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const token = await AsyncStorage.getItem('token');

        if (!token) {
          setApps([]);
          setIsLoading(false);
          return;
        }

        // Obtener aplicaciones usando el token y actualizar el estado
        // const appsData = await fetchAppsUsingToken(token);
        // setApps(appsData);

        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener las aplicaciones:', error);
        setIsLoading(false);
      }
    };

    fetchApps();
  }, []);

  const updateApps = async () => {
    try {
      const token = await AsyncStorage.getItem('token');

      if (!token) {
        setApps([]);
        return;
      }

      // Obtener aplicaciones usando el token y actualizar el estado
      // const appsData = await fetchAppsUsingToken(token);
      // setApps(appsData);

    } catch (error) {
      console.error('Error al actualizar las aplicaciones:', error);
    }
  };

  return (
    <AppContext.Provider value={{ apps, isLoading, updateApps }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;