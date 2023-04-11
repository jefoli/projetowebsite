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
    border-radius: 0 0 300px 0;
    background: ${theme.colors.white};
    min-width: 100%;
    min-height: 100%;
    justify-content: center;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: flex;
      width: 100%;
      border-radius: 0 0 130px 0;
      padding: 10px;
      flex-direction: column;


      .slide {
        opacity: 0;
        transition-duration: 1s ease;
        min-height: 245px;
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
      border-radius: 4px;
      box-shadow: 0px 0px 0px 1px #c3c3c3;

      @media ${theme.media.lteMedium} {
        height: auto;
      }
    }
  `}
`;

export const TextContent = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.large};
    padding: 15px;
    font-weight: 300;
    line-height: 50px;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
    }
  `}
`;
