import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.fonts.sizes.large};
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    margin-top: 60px;
  `}
`;
