import React from 'react';
import {StatusBar} from 'react-native';

import {Text} from '~/components/Text';
import {Button} from '~/components/Button';
import {Separator} from '~/components/Separator';
import splashImage from '~/assets/images/splash/splashScreen.png';

import {
  Container,
  ContainerRounded,
  Collumn,
  IconRoundedVaccine,
  IconVaccine,
} from './styles';
import {useControllerAccess} from './useControllerAccess';

export const Access = () => {
  const {bottom, spacing, handleNavigateToLogin, handleNavigateToSignUp} =
    useControllerAccess();

  return (
    <Container source={splashImage}>
      <StatusBar barStyle="light-content" />
      <Collumn>
        <IconRoundedVaccine>
          <IconVaccine icon="vaccinePlus" size={80} />
        </IconRoundedVaccine>
        <Separator height={spacing.md} />
        <Text typography="h2" color="background">
          Vacinadx
        </Text>
      </Collumn>
      <ContainerRounded>
        <Separator height={spacing.xl} />
        <Text typography="h4">Bem vindx</Text>
        <Separator height={spacing.sm} />
        <Text typography="subtitle1">Acesse ao app</Text>
        <Separator height={spacing.xxl} />
        <Button onPress={handleNavigateToLogin}>Login</Button>
        <Separator height={spacing.lg} />
        <Button onPress={handleNavigateToSignUp} mode="outlined">
          Cadastro
        </Button>
        <Separator height={bottom + spacing.xxxl} />
      </ContainerRounded>
    </Container>
  );
};
