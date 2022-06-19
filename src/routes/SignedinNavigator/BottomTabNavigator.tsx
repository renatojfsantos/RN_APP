import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '~/components/Icon';
import {Home} from '~/screens/Signedin/Home';
import {Profile} from '~/screens/Signedin/Profile';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
          tabBarIcon: () => <Icon icon="procurar" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          header: () => null,
          tabBarIcon: () => <Icon icon="grafico" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
