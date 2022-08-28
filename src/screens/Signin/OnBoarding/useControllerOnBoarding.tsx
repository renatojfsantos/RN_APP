import {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from 'styled-components/native';
import {useSignInNavigation} from '~/hooks/useSignInNavigation';

export const useControllerOnBoarding = () => {
  const {spacing} = useTheme();
  const {height} = useWindowDimensions();
  const {bottom, top} = useSafeAreaInsets();
  const navigation = useSignInNavigation();
  /**
   * State
   */
  const [heightPerson, setHeightPerson] = useState(0);

  /**
   * Callbacks
   */
  const handleNavigateToAccessScreen = () => {
    navigation.navigate('Access');
  };

  const handleHeightToPerson = (heightContainerBox: number) => {
    const freeSpace = height - (heightContainerBox + top + bottom + 60);
    setHeightPerson(freeSpace);
  };

  return {
    heightPerson,
    handleNavigateToAccessScreen,
    handleHeightToPerson,
    spacing,
  };
};
