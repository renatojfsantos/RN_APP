import React from 'react';
import {Icon} from '../Icon';

import {Container} from './styles';
import {BackButtonProps} from './types';

export const BackButton = ({onPress, icon}: BackButtonProps) => {
  return (
    <Container onPress={onPress}>
      <Icon icon={icon} size={15} />
    </Container>
  );
};
