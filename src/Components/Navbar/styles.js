import styled, { css } from 'styled-components';

import { Container as SectionContainer } from '../SectionContainer/styles';

const menuVisible = () => css`
  display: block;
  visibility: visible;
  opacity: 1;
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    //para desktop
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${theme.colors.white};
    padding: 15px 100px;
    height: ${theme.spacings.xxlarge};

    > img {
      width: ${theme.fonts.sizes.medium};
      height: ${theme.fonts.sizes.medium};
    }

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
      font-size: ${theme.fonts.sizes.xsmall};

      & img {
        width: ${theme.fonts.sizes.huge};
        height: ${theme.fonts.sizes.huge};
      }
    }
  `}
`;

export const Button = styled.div`
  ${({ theme, visible }) => css`
    z-index: 6;
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    display: none;
    pointer-events: ${visible ? 'none' : 'all'};
    justify-text: center;

    @media ${theme.media.lteMedium} {
      position: fixed;
      top: 1rem;
      right: 1rem;
      width: 3rem;
      height: 3rem;
      display: block;
      align-items: center;
      justify-content: center;
      display: flex;
      border-radius: 10% 10%;

      > svg {
        width: 2rem;
        height: 2rem;
      }
    }
  `}
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: ${theme.colors.mediumGray};
    background: ${theme.colors.white};
    transition: all 300ms ease-in-out;
    justify-content: center;
    box-shadow: 0px 1px ${theme.colors.mediumGray};

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    > img {
      font-size: ${theme.fonts.sizes.small};
    }

    @media ${theme.media.lteMedium} {
      min-height: 100vh;
      visibility: hidden;
      opacity: 0;

      ${visible && menuVisible(theme)}
      display: flex;

      > ${SectionContainer} {
        align-items: center;
        overflow-y: auto;
      }
    }
  `}
`;
