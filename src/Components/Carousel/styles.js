import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
${({ theme }) => css`
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 100vh;
  background: ${theme.colors.primaryColor};
  align-items: center;

  @media ${theme.media.lteMedium} {
    max-width: 100%;
    align-items: center;
    min-height: 50vh;
  }
`}
`;

export const DefaultContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row-reverse;
    padding: 30px;
    border-right: 3px solid #a07918;
    border-radius: 0 0 calc(${theme.fonts.sizes.xhuge} * 4) 0;
    background: ${theme.colors.white};
    min-width: 100%;
    min-height: 100%;
    justify-content: center;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: flex;
      width: 100%;
      border-radius: 0 0 ${theme.fonts.sizes.large} 0;
      padding: ${theme.spacings.xxsmall};
      flex-direction: column;


      .slide {
        opacity: 0;
        transition-duration: 1s ease;
        min-height: calc(${theme.fonts.sizes.xhuge} * 4);
      }

      .slide.active {
        display: flex;
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.03);
        text-align: center;
        y-index: -1;
      }
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;

    .slide {
      opacity: 0;
      transition-duration: 1s ease;
    }

    .slide.active {
      opacity: 1;
      transition-duration: 1s;
      transform: scale(1.08);
    }

    @media ${theme.media.lteMedium} {
      width: 100%;
      .slide {
        opacity: 0;
        transition-duration: 1s ease;
      }

      .slide.active {
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.03);
      }
    }

    & img {
      width: 100%;
      height: auto;
      border-radius: ${theme.fonts.sizes.xxsmall};
      box-shadow: 0px 0px 0px calc(${theme.fonts.sizes.xxsmall} - 0.7rem) ${theme.colors.mediumGray};

      @media ${theme.media.lteMedium} {
        height: auto;
      }
    }
  `}
`;

export const TextContent = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.large};
    padding: ${theme.spacings.small};
    line-height: ${theme.spacings.xxlarge};

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
    }
  `}
`;
