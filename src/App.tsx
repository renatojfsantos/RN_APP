import React from 'react';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';

import {useApperance} from '~/hooks/useApperance';
import Routes from './routes';
import {AuthProvider} from './contexts/Auth';

const App = () => {
  const {theme} = useApperance();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
