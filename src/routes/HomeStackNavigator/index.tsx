import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Feed} from '~/screens/Feed';
import {Stories} from '~/screens/Stories';
import {Home} from '~/screens/Home';

const Stack = createNativeStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Stories" component={Stories} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
