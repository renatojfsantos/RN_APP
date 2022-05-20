import styled from 'styled-components/native';
import {Mode} from './types';

interface ContainerProps {
  readonly color: string;
  readonly borderColor: string;
  readonly mode: Mode;
}

interface TitleProps {
  readonly color: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  padding: 12px 0;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-width: 1px;
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
  border-color: ${({borderColor}) => borderColor || 'transparent'};
  background-color: ${({color, mode}) =>
    mode === 'outlined' ? 'transparent' : color};
`;

export const Title = styled.Text<TitleProps>`
  color: ${({color}) => color};
  font-family: ${({theme}) => theme.typography.body2.fontFamily};
  font-size: ${({theme}) => theme.typography.body2.fontSize}px;
  align-self: center;
`;

export const Loading = styled.ActivityIndicator`
  margin-left: ${({theme}) => theme.spacing.sm}px;
`;
