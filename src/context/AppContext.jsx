import { createContext } from 'react';
import { cities } from '../../data';

export const AppContextApi = createContext({
  cities: [],
  //   exampleFunction: () => {},
});

export default function AppContext({ children }) {
  const ctxValue = {
    cities,
  };

  return (
    <AppContextApi.Provider value={ctxValue}>{children}</AppContextApi.Provider>
  );
}
