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
import {useControllerSignUp} from './useControllerSignUp';

export const SignUp = () => {
  const {
    spacing,
    colors,
    handleGoBack,
    control,
    setValue,
    errors,
    onSubmit,
    widthProgressBar,
  } = useControllerSignUp();

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <HeaderOptions
        left={<BackButton onPress={handleGoBack} icon="closeX" />}
        center={<Separator width={spacing.md} />}
        right={
          <ProgressBar
            progress={0.5}
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
        Informações pessoais
      </Text>
      <Separator height={spacing.md} />
      <Controller
        control={control}
        name="firstName"
        render={({field: {ref, onChange, value, onBlur}}) => (
          <Input
            ref={ref}
            label="Nome"
            onChange={onChange}
            onChangeText={text => setValue('firstName', text)}
            value={value}
            onBlur={onBlur}
            error={errors.firstName?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        render={({field: {ref, onChange, value, onBlur}}) => (
          <Input
            ref={ref}
            label="Sobrenome"
            onChange={onChange}
            onChangeText={text => setValue('lastName', text)}
            value={value}
            onBlur={onBlur}
            error={errors.lastName?.message}
          />
        )}
      />
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
            error={errors.email?.message}
          />
        )}
      />
      <Separator height={spacing.md} />
      <Button onPress={onSubmit}>Continuar</Button>
      <Separator height={spacing.md} />
    </Container>
  );
};
