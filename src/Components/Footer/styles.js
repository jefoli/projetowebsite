import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    text-align: center;
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.xsmall};
    background: -webkit-linear-gradient(to top, #003c58, #00709b);
    background: -o-linear-gradient(to top, #003c58, #00709b);
    background: -moz-linear-gradient(to top, #003c58, #00709b);
    background: linear-gradient(to top, #003c58, #00709b);
  `}
`;
