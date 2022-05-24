import {useRoute} from '@react-navigation/native';
import React from 'react';

import {Container} from './styles';

export const Stories = () => {
  const {params} = useRoute();
  console.log(params);
  return <Container />;
};
