import React, {useContext} from 'react';
import {AuthContext} from '~/contexts/Auth';
import BottomTabNavigator from './SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator';

const Routes = () => {
  const {isLoggedIn} = useContext(AuthContext);

  console.log(isLoggedIn);

  return isLoggedIn ? <BottomTabNavigator /> : <SignInNavigator />;
};

export default Routes;
