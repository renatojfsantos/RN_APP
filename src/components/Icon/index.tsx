import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import Icons from '../../constants/icons';

import {Container} from './styles';
import {IconProps} from './types';

export const Icon = ({
  icon,
  size = 20,
  activeColor,
  style,
}: Omit<IconProps, 'source'>) => {
  const {colors} = useContext(ThemeContext);
  if (activeColor) {
    return (
      <Container
        size={size}
        source={Icons[icon]}
        style={[{tintColor: colors[activeColor].main}, style]}
      />
    );
  }
  return <Container size={size} source={Icons[icon]} style={style} />;
};
