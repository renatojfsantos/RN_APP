import {TouchableOpacityProps} from 'react-native';
import {ColorsType, TypographyType} from 'styled-components';

export type Mode = 'outlined' | 'contained';

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  icon?: React.ReactNode;
  typography?: TypographyType;
  color?: ColorsType;
  mode?: Mode;
  loading?: boolean;
}
