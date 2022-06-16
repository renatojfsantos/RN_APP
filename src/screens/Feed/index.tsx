import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';

import {Container} from './styles';

export const Feed = () => {
  const navigation = useNavigation<StartBottomTabNavigationProp>();

  const handlePress = () => {
    // navigation.navigate('Profile');
    // navigation.navigate('Home');

    navigation.navigate('Home', {
      screen: 'Stories',
      params: {
        profile: 'Renatinho',
      },
    });
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
