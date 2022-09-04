import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoarding} from '~/screens/SignIn/OnBoarding';
import {Access} from '~/screens/SignIn/Access';
import {Login} from '~/screens/SignIn/Login';
import {SignUp} from '~/screens/SignIn/SignUp';
import {SignUpStep2} from '~/screens/SignIn/SignUpStep2';

const Stack = createNativeStackNavigator<SignInStackParamList>();

const SignInNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Access" component={Access} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpStep2" component={SignUpStep2} />
    </Stack.Navigator>
  );
};

export default SignInNavigator;
