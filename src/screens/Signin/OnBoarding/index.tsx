import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from 'styled-components';

import {Button} from '~/components/Button';
import {Separator} from '~/components/Separator';
import {Text} from '~/components/Text';

import {Container, ContainerColumn, Person} from './styles';
import {useSignInNavigation} from '~/hooks/useSignInNavigation';

export const OnBoarding = () => {
  const {spacing} = useTheme();
  const {height} = useWindowDimensions();
  const {bottom, top} = useSafeAreaInsets();
  const navigation = useSignInNavigation();

  /**
   * State
   */
  const [heightPerson, setHeightPerson] = useState(0);

  /**
   * Callbacks
   */
  const handleNavigateToAccessScreen = () => {
    navigation.navigate('Access');
  };

  const handleHeightPerson = (heightContainerBox: number) => {
    const freeSpace = height - (heightContainerBox + top + bottom + 60);
    setHeightPerson(freeSpace);
  };

  return (
    <Container>
      <Separator height={spacing.sm} />
      <Person size={heightPerson} icon="doctor" />
      <ContainerColumn
        onLayout={e => handleHeightPerson(e.nativeEvent.layout.height)}>
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
