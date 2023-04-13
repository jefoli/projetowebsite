import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    margin-top: ${theme.spacings.xxxhuge};
  `}
`;
