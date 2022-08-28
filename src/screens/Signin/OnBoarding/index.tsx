import React from 'react';

import {Button} from '~/components/Button';
import {Separator} from '~/components/Separator';
import {Text} from '~/components/Text';

import {Container, ContainerColumn, Person} from './styles';
import {useControllerOnBoarding} from './useControllerOnBoarding';

export const OnBoarding = () => {
  const {
    heightPerson,
    handleHeightToPerson,
    handleNavigateToAccessScreen,
    spacing,
  } = useControllerOnBoarding();

  return (
    <Container>
      <Separator height={spacing.sm} />
      <Person size={heightPerson} icon="doctor" />
      <ContainerColumn
        onLayout={e => handleHeightToPerson(e.nativeEvent.layout.height)}>
        <Separator height={spacing.md} />
        <Text typography="h4">
          Ben vindx ao <Text typography="h3">Vacinadx</Text>
        </Text>
        <Separator height={spacing.xxl} />
        <Text typography="subtitle1">
          Sua carteira digital de vacinação de maneira fácil e prática de
          carregar!
        </Text>
        <Separator height={spacing.xxxl} />
        <Button onPress={handleNavigateToAccessScreen}>Começar</Button>
        <Separator height={spacing.md} />
      </ContainerColumn>
    </Container>
  );
};
