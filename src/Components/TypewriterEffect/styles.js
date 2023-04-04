import styled, { css } from 'styled-components';

export const MainTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xxlarge};
    color: #a07918;
    text-align: center;
    padding: ${theme.fonts.sizes.large};
    font-weight: 400;
    text-transform: uppercase;
  `}
`;
