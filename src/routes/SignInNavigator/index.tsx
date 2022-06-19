import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoarding} from '~/screens/SignIn/OnBoarding';
import {Access} from '~/screens/SignIn/Access';
import {Login} from '~/screens/SignIn/Login';
import {SignUp} from '~/screens/SignIn/SignUp';

const Stack = createNativeStackNavigator<SignInStackParamList>();

const SignInNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Access" component={Access} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default SignInNavigator;
