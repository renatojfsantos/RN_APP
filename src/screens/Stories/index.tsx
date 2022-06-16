import {useRoute} from '@react-navigation/native';
import React from 'react';

import {Container} from './styles';

export const Stories = () => {
  const {params} = useRoute<StoriesHomeStackRouteProp>();
  console.log(params.profile);
  return <Container />;
};
