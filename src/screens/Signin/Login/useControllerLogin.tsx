import {useTheme} from 'styled-components/native';
import {useSignInNavigation} from '~/hooks/useSignInNavigation';

export const useControllerLogin = () => {
  const {spacing} = useTheme();
  const navigation = useSignInNavigation();

  /**
   * Callback
   */
  const handleGoBack = () => navigation.goBack();

  return {
    handleGoBack,
    spacing,
  };
};
