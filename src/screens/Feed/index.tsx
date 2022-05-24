import React from 'react';
import {Button} from 'react-native';

import {Container} from './styles';

export const Feed = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('Stories');
  };

  const handlePressToPost = () => {
    navigation.navigate('Profile', {
      screen: 'Post',
    });
  };

  return (
    <Container>
      <Button title="Go to Stories" onPress={handlePress} />
      <Button title="Go to Post" onPress={handlePressToPost} />
    </Container>
  );
};
