import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    text-align: center;
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.xsmall};
    background-color: #111;
    color: #c3c3c3;
  `}
`;
