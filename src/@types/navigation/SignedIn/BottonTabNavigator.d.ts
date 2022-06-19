import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

declare global {
  export type BottomTabParamList = {
    Home: undefined;
    Profile: undefined;
  };

  /**
   * useNavigation types
   */
  export type StartBottomTabNavigationProp = BottomTabNavigationProp<
    BottomTabParamList,
    'Home'
  >;
}
