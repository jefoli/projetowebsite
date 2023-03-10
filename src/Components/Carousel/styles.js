import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    padding: calc(${theme.spacings.large} - 0.2rem);

    .image {
      width: 100%;
      min-height: 30px;
      border-radius: 4px;
      object-fit: cover;
      box-shadow: 0px 0px 0px 1px #c3c3c3;
    }

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

        .image {
          min-height: 340px;
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

export const ArrowCarouselLeft = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: calc(${theme.spacings.xhuge} + ${theme.spacings.xlarge});
    font-size: 3rem;
    color: ${theme.colors.white};
    z-index: 1;
    cursor: pointer;
    user-select: none;
  `}
`;

export const ArrowCarouselRight = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    right: calc(${theme.spacings.xhuge} + ${theme.spacings.xlarge});
    font-size: 3rem;
    color: ${theme.colors.white};
    z-index: 1;
    cursor: pointer;
    user-select: none;
  `}
`;
