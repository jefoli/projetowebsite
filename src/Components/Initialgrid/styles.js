/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
import fullwidthimage from './fullwidthslider.png';

export const Container = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80vh;
  border-top: 1px solid #a07918;
  background: #080c26;
  color: white;
  `;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 48rem;
    border-top: 1px solid #a07918;
    border-bottom: 1px solid #a07918;
    background-image: url(https://mosaicoo.tech/wp-content/uploads/2015/10/image-slider-3-home-main.jpg);
    object-fit: cover;

    @media ${theme.media.lteMedium} {
      max-width: 100%;

    }
  `}
`;

export const Content = styled.div`
${({ theme }) => css`

  background: #242424f7;
  width: 51%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    background: url(${fullwidthimage}) left center no-repeat;
    height: 100%;
    position: absolute;
    width: 50.1%;
    right: -25%;
    top: 50%;
    transform: translate(50%, -50%);

  }

  > h3 {
    font-size: ${theme.fonts.sizes.small};
    padding: 15px;

  }

  @media ${theme.media.lteMedium} {
    max-width: 100%;

  }
  `}

`;

export const BoxContent = styled.h2`
  ${({ theme }) => css`
  display: flex;
  width: 100%;
  font-size: ${theme.fonts.sizes.medium};
  color: #a07918;
  padding: 30px;
  text-transform: uppercase;

  @media ${theme.media.lteMedium} {
    max-width: 100%;
    padding: 0px;

  }
  `}
`;
