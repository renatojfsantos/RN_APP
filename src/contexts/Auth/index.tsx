import React, {createContext, useState} from 'react';
import axios from 'axios';
import {UserDTO} from '~/@types/dtos/user';
import {AuthContextProps} from './types';

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<UserDTO>();
  const [loading, setLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  /**
   * Callbacks para manipulação estados de autenticação
   */
  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);
    const response = await axios.post('http://localhost:8080/api/auth', {
      email,
      password,
    });
    setUser(response.data.user);
    setLoading(false);
    setIsSignedIn(true);
  };

  const signOut = () => {
    setIsSignedIn(false);
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{user, loading, isSignedIn, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
