import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoarding} from '~/screens/Signin/OnBoarding';
import {Access} from '~/screens/Signin/Access';
import {Login} from '~/screens/Signin/Login';
import {SignUp} from '~/screens/Signin/SignUp';

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
