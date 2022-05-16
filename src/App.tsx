import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Button} from './components/Button';
import {Header} from './components/Header';
import {Icon} from './components/Icon';
import {Text} from './components/Text';

import {useApperance} from './hooks/useApperance';

import {Container} from './styles';

const App = () => {
  const {theme} = useApperance();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Button onPress={() => {}} />
        <Text typography="h4" color="secondary">
          Renato
        </Text>
        <Icon icon="procurar" activeColor="secondary" />
        {/* <Icon icon="procurar" size={150} /> */}
        {/* <Icon icon="grafico" size={150} activeColor="error" /> */}
      </Container>
    </ThemeProvider>
  );
};

export default App;
