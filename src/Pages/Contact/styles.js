import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: block;
    margin: 50px auto;
    margin-right: auto;
    padding: ${theme.spacings.large};
    text-align: center;
    border-radius: ${theme.fonts.sizes.xxsmall};
    min-height: 80vh;
    font-size: ${theme.fonts.sizes.small};
    max-width: 1310px;
    line-height: 50px;
  `}
`;
