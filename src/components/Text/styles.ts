import styled from 'styled-components/native';
import {Props} from './types';

type ContainerProps = Required<Pick<Props, 'color' | 'typography'>>;

export const Container = styled.Text<ContainerProps>`
  color: ${({theme, color}) => theme.colors[color].main};
  font-size: ${({theme, typography}) =>
    theme.typography[typography].fontSize}px;
  font-family: ${({theme, typography}) =>
    theme.typography[typography].fontFamily};
`;
