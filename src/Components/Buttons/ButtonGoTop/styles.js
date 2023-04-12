import styled, { css } from 'styled-components';

export const Container = styled.a`
${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    position: fixed;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: ${theme.fonts.sizes.large};
    width: ${theme.spacings.large};
    height: ${theme.spacings.large};
    bottom: calc(${theme.spacings.medium} - 0.2rem);
    right:${theme.spacings.xsmall};
    z-index: 2;
    border-radius: ${theme.spacings.xxsmall};

    @media ${theme.media.lteMedium} {
      position: fixed;
      display: flex;
      text-align: center;
      justify-content: center;
      width: ${theme.spacings.large};
      height: ${theme.spacings.large};
      bottom: ${theme.spacings.xsmall};
      right: ${theme.spacings.xsmall};
      z-index: 6;
      border-radius: ${theme.spacings.xxsmall};
    }
  `}
`;
