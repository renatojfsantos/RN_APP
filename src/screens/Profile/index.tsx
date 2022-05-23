import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '~/components/Text';

import {Container} from './styles';

export const Profile = ({navigation, route}) => {
  const {userName} = route.params;
  const handleNavigation = () => navigation.push('Profile');
  const handleUpdadeParams = () =>
    navigation.setParams({userName: 'Mariahzinha'});
  const handleNavigateToHome = () =>
    navigation.navigate('Home', {
      selectedUser: 'Bolinha',
    });

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>{`Profile: ${userName}`}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleUpdadeParams}>
        <Text>Update params</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNavigateToHome}>
        <Text>Navigate to Home with params</Text>
      </TouchableOpacity>
    </Container>
  );
};
