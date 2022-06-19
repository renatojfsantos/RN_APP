// import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type HomeStackParamList = {
    Home: undefined;
    // Stories: {profile: string};
  };

  /**
   * useNavigation types
   */
  export type HomeStackNavigatorProp = NativeStackNavigationProp<
    HomeStackParamList,
    'Home'
  >;

  /**
   * useRoute types
   */
  // export type StoriesHomeStackRouteProp = RouteProp<
  //   HomeStackParamList,
  //   'Stories'
  // >;
}
