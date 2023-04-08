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

    > h2 {
      font-weight: 700;
      text-transform: uppercase;
      margin: 10px 0;
    }

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      padding: ${theme.spacings.xxsmall};
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
  `}

`;
