import React from 'react';
import BottomTabNavigator from './SignedinNavigator/BottomTabNavigator';
import SignInNavigator from './SignInNavigator';

const Routes = () => {
  const isLoggedIn = true;

  return isLoggedIn ? <BottomTabNavigator /> : <SignInNavigator />;
};

export default Routes;
