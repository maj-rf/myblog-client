/* eslint-disable camelcase */
import { useEffect, createContext, useState } from 'react';
import { PublicUser } from '../types/types';
import jwt_decode from 'jwt-decode';

type AuthContextType = {
  user: PublicUser | null;
};
type AuthContextProviderProps = { children: React.ReactNode };

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<PublicUser | null>(null);
  useEffect(() => {
    const accessToken = window.localStorage.getItem('accessToken');
    if (accessToken) {
      const { id, username } = jwt_decode(accessToken) as PublicUser;
      setUser({ id, username });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
