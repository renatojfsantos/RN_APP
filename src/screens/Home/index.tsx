import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '~/components/Text';

import {Container} from './styles';

export const Home = () => {
  const navigation = useNavigation;

  const handleNavigation = () =>
    navigation.navigate('Profile', {
      userName: 'Renato Santos',
    });

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>{'Home:'}</Text>
      </TouchableOpacity>
    </Container>
  );
};
