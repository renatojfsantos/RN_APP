import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Button} from './components/Button';
import {Icon} from './components/Icon';
import {Separator} from './components/Separator';

import {useApperance} from './hooks/useApperance';

import {Container} from './styles';

const App = () => {
  const {theme} = useApperance();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          <Icon icon="procurar" size={150} />
          <Separator width={30} height={150} />
          <Icon icon="grafico" size={150} />
        </View>
        <Button color="surface" loading mode="outlined">
          Change Icons
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default App;
