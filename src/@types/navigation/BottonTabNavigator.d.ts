import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';

declare global {
  export type BottomTabParamList = {
    Home: NavigatorScreenParams<HomeStackParamList> | undefined;
    Profile: NavigatorScreenParams<ProfileStackParamList> | undefined;
  };

  /**
   * useNavigation types
   */
  export type StartBottomTabNavigationProp = BottomTabNavigationProp<
    BottomTabParamList,
    'Home'
  >;
}
