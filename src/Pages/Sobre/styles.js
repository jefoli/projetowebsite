import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    text-align: center;
    margin: ${theme.spacings.small} auto;
    padding: ${theme.spacings.large};
    max-width: 100%;
    min-height: 100vh;
    font-size: ${theme.fonts.sizes.small};
  `}
`;
