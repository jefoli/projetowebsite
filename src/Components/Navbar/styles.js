import styled, { css } from 'styled-components';

const menuVisible = () => css`
  display: block;
  visibility: visible;
  opacity: 1;
  background: white;
`;

export const Container = styled.div`
${({ theme }) => css`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s ease-out, visibility 0.5s ease-out;

  &.scroll {
    opacity: 0;
    visibility: hidden;
    box-shadow: 0;
  }

  @media ${theme.media.lteMedium} {
    max-width: 100%;
  }
`}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    //para desktop
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 100px;
    height: ${theme.spacings.xxlarge};

    & img {
      width: ${theme.fonts.sizes.large};
      height: ${theme.fonts.sizes.large};
    }

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacings.xxlarge} 0;
      font-size: ${theme.fonts.sizes.xsmall};
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    justify-content: center;
    background: white;
    box-shadow: 0px 1px ${theme.colors.mediumGray};

    @media ${theme.media.lteMedium} {
      min-height: 100vh;
      visibility: hidden;
      opacity: 1;

      ${visible && menuVisible(theme)}
      display: flex;
    }
  `}
`;
