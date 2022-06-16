import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Profile} from '~/screens/Profile';
import {Post} from '~/screens/Post';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
