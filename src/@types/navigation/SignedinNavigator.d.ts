import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type SignedinStackParamList = {
    Home: undefined;
    Profile: undefined;
  };

  /**
   * useNavigation types
   */
  export type SignedinStackNavigatorProp = NativeStackNavigationProp<
    SignedinStackParamList,
    'Home'
  >;
}
