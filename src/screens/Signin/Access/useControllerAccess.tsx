import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from 'styled-components';
import {useSignInNavigation} from '~/hooks/useSignInNavigation';

export const useControllerAccess = () => {
  const {bottom} = useSafeAreaInsets();
  const {spacing} = useTheme();
  const navigation = useSignInNavigation();

  /**
   * Callback
   */
  const handleNavigateToLogin = () => navigation.navigate('Login');
  const handleNavigateToSignUp = () => navigation.navigate('SignUp');

  return {
    bottom,
    spacing,
    handleNavigateToLogin,
    handleNavigateToSignUp,
  };
};
