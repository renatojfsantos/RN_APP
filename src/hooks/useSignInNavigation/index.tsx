import {useNavigation} from '@react-navigation/native';

export const useSignInNavigation = () => {
  const navigation = useNavigation<SignInStackNavigatorProp>();
  return navigation;
};
