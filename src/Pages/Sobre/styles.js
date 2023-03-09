import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    height: 100vh;
    margin: ${theme.spacings.small} auto;
    padding: ${theme.spacings.large};
    width: 100%;
    font-size: ${theme.fonts.sizes.small};
  `}
`;
