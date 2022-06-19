import React, {useContext} from 'react';
import {Text} from 'react-native';
import {AuthContext} from '~/contexts/Auth';

import {Container} from './styles';

export const OnBoarding = () => {
  const bolinha = useContext(AuthContext);
  console.log(bolinha);
  return (
    <Container>
      <Text>Tela de OnBoarding</Text>
    </Container>
  );
};
