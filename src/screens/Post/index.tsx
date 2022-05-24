import {useIsFocused, useNavigationState} from '@react-navigation/native';
import React from 'react';

import {Container} from './styles';

export const Post = () => {
  const isFocused = useIsFocused();

  const state = useNavigationState(state => state);
  console.log(state);

  console.log(isFocused);
  return <Container />;
};
