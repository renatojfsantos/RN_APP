import React, {useRef} from 'react';
import {Alert, View} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Button} from './components/Button';
import {Icon} from './components/Icon';
import Input from './components/Input';
import {InputValueRef} from './components/Input/types';
import {Separator} from './components/Separator';

import {useApperance} from './hooks/useApperance';

import {Container} from './styles';

const App = () => {
  const {theme} = useApperance();

  const refEmail = useRef<InputValueRef>({value: ''});
  const refPassword = useRef<InputValueRef>({value: ''});

  const handlePress = () => {
    Alert.alert(
      refEmail.current?.value || 'Não foi possível pegar o email',
      refPassword.current?.value || 'Não foi possível pegar a senha',
    );
  };

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
        <View>
          <Input
            ref={refEmail}
            placeholder="seuemail@gmail.com"
            icon="grafico"
            iconPosition="right"
            label="E-mail"
          />
          <Separator height={10} />
          <Input
            ref={refPassword}
            placeholder="Sua senha"
            secureTextEntry
            label="Password"
          />
        </View>
        <Button color="surface" mode="outlined" onPress={handlePress}>
          Login
        </Button>
        <Separator />
      </Container>
    </ThemeProvider>
  );
};

export default App;
