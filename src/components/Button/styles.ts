import {TypographyType} from 'styled-components';
import styled from 'styled-components/native';
import {Mode} from './types';

interface ContainerProps {
  readonly color: string;
  readonly borderColor: string;
  readonly mode: Mode;
}

interface TitleProps {
  readonly color: string;
  readonly typography: TypographyType;
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
  font-family: ${({theme, typography}) =>
    theme.typography[typography].fontFamily};
  font-size: ${({theme, typography}) =>
    theme.typography[typography].fontSize}px;
  align-self: center;
`;

export const Loading = styled.ActivityIndicator`
  margin-left: ${({theme}) => theme.spacing.sm}px;
`;

export const AbsoluteIcon = styled.View`
  position: absolute;
  left: ${({theme}) => theme.spacing.md}px;
`;
