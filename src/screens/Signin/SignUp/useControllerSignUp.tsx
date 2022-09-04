import {useWindowDimensions} from 'react-native';
import {useTheme} from 'styled-components/native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {useSignInNavigation} from '~/hooks/useSignInNavigation';
import {schemaSignUp} from './validation';
import {useMemo} from 'react';

export const useControllerSignUp = () => {
  const {spacing, colors} = useTheme();
  const navigation = useSignInNavigation();
  const {width} = useWindowDimensions();

  /**
   * Forms
   */
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schemaSignUp),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  const onSubmit = async () => {
    await handleSubmit(
      ({firstName, lastName, email}) => {
        console.log({firstName, lastName, email});
      },
      () =>
        console.error(
          'Este é o segundo parametro do handleSubmit, caso haja erro colocar uma mensagem como: Form inválido',
        ),
    )();
  };

  /**
   * Memos
   */
  const widthProgressBar = useMemo(() => {
    const pressableXWidth = 35;
    const marginScreenWidth = spacing.md * 3;
    const centerHeaderOptionsWidth = spacing.md;
    const value =
      width - (marginScreenWidth + pressableXWidth + centerHeaderOptionsWidth);

    return value;
  }, [width, spacing]);

  /**
   * Callback
   */
  const handleGoBack = () => navigation.goBack();

  return {
    handleGoBack,
    widthProgressBar,
    spacing,
    colors,
    control,
    setValue,
    errors,
    onSubmit,
  };
};
