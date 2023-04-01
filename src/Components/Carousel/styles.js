import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 100%;
  height: 70vh;
  background: #080c26;
`;

export const imageContent = styled.img`
${({ theme }) => css`
  width: 700px;
  height: auto;
  border-radius: 4px;
  box-shadow: 0px 0px 0px 1px #c3c3c3;

  @media ${theme.media.lteMedium} {
    width: 320px;
    height: auto;
`}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    padding: calc(${theme.spacings.large} - 0.2rem);
    border-right: 3px solid #a07918;
    background: white;
    border-radius: 0 0 300px 0;
    background: white;

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
      ${({ theme }) => css`
        width: 100%;

        .slide {
          min-height: 340px;
          opacity: 0;
          transition-duration: 1s ease;
        }

        .slide.active {
          opacity: 1;
          transition-duration: 1s;
          transform: scale(1.03);
          padding: calc(${theme.spacings.large}- 0.2rem);
        }
      `}
    }
  `}
`;
