import styled, { css } from 'styled-components';

export const Button = styled.div`
  ${({ theme, visible }) => css`
    z-index: 6;
    position: fixed;
    top: ${theme.spacings.xsmall};
    right: ${theme.spacings.xsmall};
    width: ${theme.spacings.large};
    height: ${theme.spacings.large};
    color: ${theme.colors.white};
    border: none;
    display: none;
    pointer-events: ${visible ? 'none' : 'all'};
    align-items: center;
    border-radius: ${theme.spacings.xxsmall};
    background: ${theme.colors.backgroundGradientGray};

    > svg {
      width:${theme.fonts.sizes.medium};
      height: ${theme.fonts.sizes.medium};
    }

    @media ${theme.media.lteMedium} {
      justify-content: center;
      display: flex;
    }
  `}
`;
