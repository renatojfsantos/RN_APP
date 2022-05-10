import React, {useContext} from 'react';
import {Button as ButtonRN} from 'react-native';
import {ThemeContext} from 'styled-components';

export const Button: React.FC<{onPress: () => void}> = ({onPress}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <ButtonRN
      color={themeContext.colors.secondary}
      title="Change theme"
      onPress={onPress}
    />
  );
};
