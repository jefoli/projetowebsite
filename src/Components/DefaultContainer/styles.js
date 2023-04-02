import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    margin: ${theme.spacings.small} auto;
    padding: ${theme.spacings.large};
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.white};
    line-height: 60px;
    max-width: 1310px;

    h1 {
      font-weight: 700;
    }

    h2 {
      font-weight: 400;
    }

    p {
      font-size: ${theme.fonts.sizes.medium};
    }
  `}
`;
