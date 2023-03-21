import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    padding: ${theme.spacings.large};
    color: ${theme.colors.black};
    text-align: center;
    border-radius: ${theme.fonts.sizes.xxsmall};
    max-width: 100%;
    margin: ${theme.fonts.sizes.small} auto;
    font-size: ${theme.fonts.sizes.small};
  `}
`;
