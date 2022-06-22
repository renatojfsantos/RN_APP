import React, {createContext, useState} from 'react';
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const signIn = async (data?: {email: string; password: string}) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(() => resolve('ok'), 2000));
    setLoading(false);
    setIsSignedIn(true);
    setUser({id: '1'});
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
