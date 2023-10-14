import { createContext } from "react";
import { useAxios } from "../hooks/useAxios";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const {
    response: planets,
    loading: planetsLoading,
    error: planetsError,
  } = useAxios({
    method: "GET",
    url: "https://findfalcone.geektrust.com/planets",
  });

  const {
    response: vehicles,
    loading: vehiclesLoading,
    error: vehiclesError,
  } = useAxios({
    method: "GET",
    url: "https://findfalcone.geektrust.com/vehicles",
  });

  return (
    <DataContext.Provider
      value={{
        planets: planets,
        vehicles: vehicles,
        planetsLoading: planetsLoading,
        planetsError: planetsError,
        vehiclesLoading: vehiclesLoading,
        vehiclesError: vehiclesError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
