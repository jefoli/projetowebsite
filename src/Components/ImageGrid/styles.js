/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
  background: white;
  display: flex;
  width: 100%;

  @media ${theme.media.lteMedium} {
    display: flex;
    text-align: center;
    max-width: 100%;
    background: #080c26;
  }
  `}
`;

export const BoxContent = styled.div`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 300px 0px 0px;
  border-left: 3px solid #a07918;
  background: #080c26;
  width: 100%;
  padding: ${theme.spacings.xlarge};


  @media ${theme.media.lteMedium} {
    display: flex;
    max-width: 100%;
    background: #080c26;
    border: none;

    img:hover {
      transform: scale(1.1);
    }
  }
  `}
`;

export const Title = styled.h1`
${({ theme }) => css`
  font-size: ${theme.fonts.sizes.medium};
  color: white;
  padding: 30px 0px;
  text-transform: uppercase;
  font-weight: 700;

  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      align-items: center;
      max-width: 100%;
      justify-items: center;
    }
  `}
`;

export const StyleCircle = styled.div`
  ${({ theme }) => css`
    width: 120px;
    height: 100%;
    transition: all 200ms ease-in-out;
    overflow: hidden;
    border-radius: 500px;
    box-shadow: 0 0px 0px 2px #a07918;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      transform: scale(1.1);
    }


  `}
`;
