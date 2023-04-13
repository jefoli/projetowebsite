/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
  background: ${theme.colors.white};
  display: flex;
  width: 100%;

  @media ${theme.media.lteMedium} {
    display: flex;
    text-align: center;
    max-width: 100%;
    background: ${theme.colors.primaryColor};
  }
  `}
`;

export const BoxContent = styled.div`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: calc(${theme.fonts.sizes.xhuge} * 5) 0rem 0rem;
  border-left: ${theme.spacings.small} solid ${theme.colors.colorTitle};
  background: ${theme.colors.primaryColor};
  width: 100%;
  padding: ${theme.spacings.xlarge};


  @media ${theme.media.lteMedium} {
    display: flex;
    max-width: 100%;
    background: ${theme.colors.primaryColor};
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
    color: ${theme.colors.white};
    padding: ${theme.spacings.large} 0rem;
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

export const StyleCircle = styled.img`
  ${({ theme }) => css`
    width: 120px;
    height: 100%;
    transition: all 200ms ease-in-out;
    overflow: hidden;
    border-radius: ${theme.fonts.sizes.xhuge};
    box-shadow: 0rem 0rem ${theme.fonts.sizes.xxsmall} ${theme.fonts.sizes.xxsmall} ${theme.colors.colorTitle};
    object-fit: cover;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0rem 0rem ${theme.fonts.sizes.xxsmall} ${theme.fonts.sizes.xxsmall} ${theme.colors.mediumGray};

    }
  `}
`;
