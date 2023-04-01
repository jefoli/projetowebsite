import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    width: 100%;
    text-align: center;
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
      font-weight: 700;
      text-transform: uppercase;
      margin: 10px 0;
    }
    > p {
      font-size: ${theme.fonts.sizes.medium};
    }
  `}
`;

export const AboutText = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    text-align: center;
    min-height: 100vh;
    margin: ${theme.spacings.small} auto;
    padding: ${theme.spacings.large};
    font-size: ${theme.fonts.sizes.small};

    > p {
      font-size: ${theme.fonts.sizes.medium};

    }

  `}

`;
