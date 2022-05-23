import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '~/components/Text';

import {Container} from './styles';

export const Home = ({navigation}) => {
  const handleNavigation = () => navigation.navigate('Profile');

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>Home</Text>
      </TouchableOpacity>
    </Container>
  );
};
