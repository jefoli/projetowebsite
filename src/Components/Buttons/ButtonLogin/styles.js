import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    > a {
      text-decoration: none;
      text-align: center;
    }
  `}
`;

export const BtnLogin = styled.button`
  ${({ theme }) => css`
    display: flex;
    font-size: calc(${theme.fonts.sizes.small} - 0.1rem);
    border: none;
    border-radius: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
    text-transform: uppercase;
    align-items: center;
    width: 100%;
    height: calc(${theme.spacings.large} - 0.2rem);
    padding: calc(${theme.spacings.medium} - 0.4rem);
    background: ${theme.colors.backgroundGradientLeft};
    cursor: pointer;

    @media ${theme.media.lteMedium} {
      text-align: center;
    }
  `}
`;
