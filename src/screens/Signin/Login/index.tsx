import React from 'react';
import {StatusBar} from 'react-native';
import {Controller} from 'react-hook-form';

import Input from '~/components/Input';
import {Button} from '~/components/Button';
import {HeaderOptions} from '~/components/HeaderOptions';
import {Icon} from '~/components/Icon';
import {Separator} from '~/components/Separator';
import {Text} from '~/components/Text';

import {Container, PressableX, AccessText} from './styles';
import {useControllerLogin} from './useControllerLogin';

export const Login = () => {
  const {spacing, handleGoBack, control, setValue, errors, onSubmit} =
    useControllerLogin();

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <HeaderOptions
        left={
          <PressableX onPress={handleGoBack}>
            <Icon icon="closeX" size={15} />
          </PressableX>
        }
        right={
          <Text color="primary" typography="body3">
            Esqueci minha senha
          </Text>
        }
      />
      <Separator height={spacing.md} />
      <Text typography="h3">Login</Text>
      <Separator height={spacing.md} />

      <Controller
        control={control}
        name="email"
        render={({field: {ref, onChange, value, onBlur}}) => (
          <Input
            ref={ref}
            autoCapitalize="none"
            autoComplete="email"
            keyboardType="email-address"
            onChange={onChange}
            onChangeText={text => setValue('email', text)}
            value={value}
            onBlur={onBlur}
            label="Email"
            icon="checkCircle"
            iconColor="primary"
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({field: {ref, onChange, value, onBlur}}) => (
          <Input
            ref={ref}
            autoCapitalize="none"
            onChange={onChange}
            onChangeText={text => setValue('password', text)}
            value={value}
            onBlur={onBlur}
            label="Senha"
            secureTextEntry
            iconColor="primary"
            error={errors.password?.message}
          />
        )}
      />

      <Separator height={spacing.md} />
      <Button onPress={onSubmit}>Login</Button>
      <Separator height={spacing.md} />
      <AccessText color="surface500" typography="body3">
        ou acesse com login social
      </AccessText>
      <Separator height={spacing.md} />
      <Button
        typography="caption"
        icon={<Icon icon="apple" />}
        color="secondary"
        mode="outlined">
        Continuar com a Apple
      </Button>
      <Separator height={spacing.md} />
      <Button
        typography="caption"
        icon={<Icon icon="google" />}
        color="secondary"
        mode="outlined">
        Continuar com o Google
      </Button>
    </Container>
  );
};
