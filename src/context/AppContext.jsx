import { createContext, useState } from 'react';
import { cities } from '../../data';

export const AppContextApi = createContext({
  cities: [],
  selectedWay: () => {},
  setSelectedWay: () => {},
});

export default function AppContext({ children }) {
  const [selectedWay, setSelectedWay] = useState('یک طرفه');

  const ctxValue = {
    cities,
    selectedWay,
    setSelectedWay,
  };

  return (
    <AppContextApi.Provider value={ctxValue}>{children}</AppContextApi.Provider>
  );
}
