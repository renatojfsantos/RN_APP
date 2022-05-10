import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${({theme}) => theme.colors.background.main};
`;
