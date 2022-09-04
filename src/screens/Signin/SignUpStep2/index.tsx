import React from 'react';
import {Controller} from 'react-hook-form';
import {StatusBar} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

import {Button} from '~/components/Button';
import {HeaderOptions} from '~/components/HeaderOptions';
import Input from '~/components/Input';
import {Separator} from '~/components/Separator';
import {Text} from '~/components/Text';
import {BackButton} from '~/components/BackButton';

import {Container} from './styles';
import {useControllerSignUpStep2} from './useControllerSignUpStep2';

export const SignUpStep2 = () => {
  const {
    spacing,
    colors,
    handleGoBack,
    control,
    setValue,
    errors,
    onSubmit,
    widthProgressBar,
  } = useControllerSignUpStep2();

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <HeaderOptions
        left={<BackButton onPress={handleGoBack} icon="back" />}
        center={<Separator width={spacing.md} />}
        right={
          <ProgressBar
            progress={1}
            color={colors.primary.main}
            unfilledColor={colors.surface50.main}
            borderWidth={0}
            height={6}
            width={widthProgressBar}
          />
        }
      />
      <Separator height={spacing.md} />
      <Text typography="h3">Cadastro</Text>
      <Separator height={spacing.md} />
      <Text color="surface100" typography="caption">
        {'Sua senha precisa ter pelo menos \n8 caracteres'}
      </Text>
      <Separator height={spacing.md} />
      <Controller
        control={control}
        name="password"
        render={({field: {ref, onChange, value, onBlur}}) => (
          <Input
            ref={ref}
            label="Senha"
            autoCapitalize="none"
            autoComplete="password"
            secureTextEntry
            iconColor="primary"
            onChange={onChange}
            onChangeText={text => setValue('password', text)}
            value={value}
            onBlur={onBlur}
            error={errors.password?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({field: {ref, onChange, value, onBlur}}) => (
          <Input
            ref={ref}
            label="Confirmar Senha"
            autoCapitalize="none"
            autoComplete="password"
            secureTextEntry
            iconColor="primary"
            onChange={onChange}
            onChangeText={text => setValue('confirmPassword', text)}
            value={value}
            onBlur={onBlur}
            error={errors.confirmPassword?.message}
          />
        )}
      />
      <Separator height={spacing.md} />
      <Button onPress={onSubmit}>Finalizar</Button>
      <Separator height={spacing.md} />
    </Container>
  );
};
