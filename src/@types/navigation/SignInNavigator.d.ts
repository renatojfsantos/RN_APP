import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type SignInStackParamList = {
    Access: undefined;
    Login: undefined;
    OnBoarding: undefined;
    SignUp: undefined;
  };

  /**
   * useNavigation types
   */
  export type SignInStackNavigatorProp = NativeStackNavigationProp<
    SignInStackParamList,
    'OnBoarding'
  >;
}
