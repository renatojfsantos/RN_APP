import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 20px;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.background.main};
`;
