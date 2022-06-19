import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type ProfileStackParamList = {
    Profile: undefined;
  };

  /**
   * useNavigation types
   */
  export type ProfileStackNavigatorProp = NativeStackNavigationProp<
    ProfileStackParamList,
    'Profile'
  >;
}
