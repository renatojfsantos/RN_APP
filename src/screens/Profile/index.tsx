import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '~/components/Text';

import {Container} from './styles';

export const Profile = () => {
  const navigation = useNavigation();

  const {params} = useRoute();
  console.log(params);

  const handleNavigation = () => navigation.navigate('Post');

  return (
    <Container>
      <TouchableOpacity onPress={handleNavigation}>
        <Text>{'Profile'}</Text>
      </TouchableOpacity>
    </Container>
  );
};
