import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {UserDTO} from '~/@types/dtos/user';
import {asyncUserKeys, AuthContextProps} from './types';
import {signInResource} from '~/services/resource';
import {RequestSignInData} from '~/services/resource/types';

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<UserDTO>();
  const [loading, setLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [rehydrateLoading, setRehydrateLoading] = useState(true);

  /**
   * Callbacks para manipulação estados de autenticação
   */
  const signIn = async (data: RequestSignInData) => {
    try {
      setLoading(true);
      const response = await signInResource(data);
      setUser(response.user);
      setIsSignedIn(true);
      // api.default.header.Authorization = `Bearer ${response.data.token}`;
      AsyncStorage.setItem(asyncUserKeys.user, JSON.stringify(response.user));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setIsSignedIn(false);
    setUser(undefined);
    await AsyncStorage.clear();
  };

  const rehydrate = async () => {
    const rehydrateUser = await AsyncStorage.getItem(asyncUserKeys.user);

    if (rehydrateUser) {
      setUser(JSON.parse(rehydrateUser));
      setIsSignedIn(true);
    }
    setRehydrateLoading(false);
  };

  /**
   * Effects
   */
  useEffect(() => {
    rehydrate();
  }, []);

  return (
    <AuthContext.Provider value={{user, loading, isSignedIn, signIn, signOut}}>
      {!rehydrateLoading && children}
    </AuthContext.Provider>
  );
};
