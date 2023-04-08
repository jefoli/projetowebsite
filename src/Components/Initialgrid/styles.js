/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100hv;
  border-top: 1px solid #a07918;
  background: #080c26;
  line-height: 50px;
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 100%;
    max-height: auto;
    border-top: 1px solid #a07918;
    border-bottom: 1px solid #a07918;
    background-image: url(https://mosaicoo.tech/wp-content/uploads/2015/10/image-slider-3-home-main.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      font-size: ${theme.fonts.sizes.small};

    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: #fffffff0;
    max-width: 51%;
    max-height: 100%;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
      padding: 0;
    }
  `}
`;

export const BoxContent = styled.h2`
  ${({ theme }) => css`
    max-width: 100%;
    font-size: ${theme.fonts.sizes.large};
    color: #a07918;
    padding: 15px;
    text-transform: uppercase;
    text-align: center;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
      padding: 0;
    }
  `}
`;
