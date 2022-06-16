import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type ProfileStackParamList = {
    Profile: undefined;
    Post: undefined;
  };

  /**
   * useNavigation types
   */
  export type ProfileStackNavigatorProp = NativeStackNavigationProp<
    ProfileStackParamList,
    'Profile'
  >;
}
