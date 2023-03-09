import styled, { css } from 'styled-components';
export const Container = styled.section`
  ${({ theme }) => css`
    margin: 0 auto;
    color: ${theme.colors.white};
  `}
`;
