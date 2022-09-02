import {useTheme} from 'styled-components/native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {useSignInNavigation} from '~/hooks/useSignInNavigation';
import {schemaLogin} from './validation';

export const useControllerLogin = () => {
  const {spacing} = useTheme();
  const navigation = useSignInNavigation();

  /**
   * Forms
   */
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async () => {
    await handleSubmit(
      ({email, password}) => {
        console.log({email, password});
      },
      () =>
        console.error(
          'Este é o segundo parametro do handleSubmit, caso haja erro colocar uma mensagem como: Form inválido',
        ),
    )();
  };

  /**
   * Callback
   */
  const handleGoBack = () => navigation.goBack();

  return {
    handleGoBack,
    spacing,
    control,
    setValue,
    errors,
    onSubmit,
  };
};
