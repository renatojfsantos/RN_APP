import {useWindowDimensions} from 'react-native';
import {useTheme} from 'styled-components/native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useRoute} from '@react-navigation/native';

import {useSignInNavigation} from '~/hooks/useSignInNavigation';
import {schemaSignUpStep2} from './validation';
import {useMemo} from 'react';

export const useControllerSignUpStep2 = () => {
  const {spacing, colors} = useTheme();
  const navigation = useSignInNavigation();
  const {
    params: {firstName, lastName, email},
  } = useRoute<SignUpStep2StackRouteProp>();
  const {width} = useWindowDimensions();

  console.log({firstName, lastName, email});

  /**
   * Forms
   */
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schemaSignUpStep2),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async () => {
    await handleSubmit(
      ({password, confirmPassword}) => {
        console.log({password, confirmPassword});
      },
      // () =>
      //   console.error(
      //     'Este é o segundo parametro do handleSubmit, caso haja erro colocar uma mensagem como: Form inválido',
      //   ),
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
