// import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type SignInStackParamList = {
    Access: undefined;
    Login: undefined;
    OnBoarding: undefined;
    SignUp: undefined;
    // Stories: {profile: string};
  };

  /**
   * useNavigation types
   */
  export type SignInStackNavigatorProp = NativeStackNavigationProp<
    SignInStackParamList,
    'Access'
  >;

  /**
   * useRoute types
   */
  // export type StoriesHomeStackRouteProp = RouteProp<
  //   SignInStackParamList,
  //   'Access'
  // >;
}
