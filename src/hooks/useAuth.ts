import { AuthContext } from './../context/AuthContext';
import { useContext } from 'react';

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context) {
    return context;
  }

  throw new Error('useStateContext must be used within a StateContextProvider');
};
