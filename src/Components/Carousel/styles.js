import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
${({ theme }) => css`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 70vh;
  background: ${theme.colors.primaryColor};

  @media ${theme.media.lteMedium} {
    width: 100%;
    align-items: center;
    min-height: 50vh;
    padding: 0 10px;

  }
`}
`;

export const imageContent = styled.img`
${({ theme }) => css`
  width: 600px;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 1px #c3c3c3;

  @media ${theme.media.lteMedium} {
    max-width: 344px;
    height: auto;
    border-radius: 0 0 110px 0;
  }
`}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 100%;
    padding: calc(${theme.spacings.large} - 0.2rem);
    border-right: 3px solid #a07918;
    border-radius: 0 0 300px 0;
    background: ${theme.colors.white};

    .slide {
      min-height: 340px;
      opacity: 0;
      transition-duration: 1s ease;
    }

    .slide.active {
      opacity: 1;
      transition-duration: 1s;
      transform: scale(1.08);
    }

    @media ${theme.media.lteMedium} {
        max-width: 100%;
        border-radius: 0 0 130px 0;
        padding: 10px 10px 0 10px;

        .slide {
          opacity: 0;
          transition-duration: 1s ease;
          min-height: 245px;
        }

        .slide.active {
          opacity: 1;
          transition-duration: 1s;
          transform: scale(1.03);
        }

    }
  `}
`;
