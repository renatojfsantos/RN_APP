import React from 'react';
import {Button} from 'react-native';

import {Container} from './styles';

export const Feed = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Stories');
  };
  return (
    <Container>
      <Button title="Go to Stories" onPress={handlePress} />
    </Container>
  );
};
