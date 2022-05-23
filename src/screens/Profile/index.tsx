import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '~/components/Text';

import {Container} from './styles';

export const Profile = ({navigation}) => {
  const handleNavigation = () => navigation.push('Profile');
  const handleNavigationToTop = () => navigation.popToTop();

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNavigationToTop}>
        <Text>Pop to top</Text>
      </TouchableOpacity>
    </Container>
  );
};
