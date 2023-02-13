/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    padding: 30px;

    .image {
      width: 100%;
      min-height: 350px;
      border-radius: 4px;
      object-fit: cover;
      box-shadow: 0px 0px 0px 1px #c3c3c3;
    }

    .right-arrow {
      position: absolute;
      top: 50%;
      right: 100px;
      font-size: 3rem;
      color: #fff;
      z-index: 1;
      cursor: pointer;
      user-select: none;
    }

    .left-arrow {
      position: absolute;
      top: 50%;
      left: 100px;
      font-size: 3rem;
      color: #fff;
      z-index: 1;
      cursor: pointer;
      user-select: none;
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
      .left-arrow,
      .right-arrow {
        max-width: 100%;
        top: 50%;
        font-size: 1.5rem;
      }

      .slide {
        opacity: 0;
        transition-duration: 1s ease;
      }

      .image {
        width: 100%;
      }
      .slide.active {
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.03);
        padding: 30px;
      }
    }
  `}
`;
