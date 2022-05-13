import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Button} from './components/Button';
import {Header} from './components/Header';
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
        <Text typography="h1" color="primary">
          Renato
        </Text>
      </Container>
    </ThemeProvider>
  );
};

export default App;
