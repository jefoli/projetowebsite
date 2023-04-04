/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 100%;
    background-color: #cf9900;
    border-radius: ${theme.spacings.xxsmall};
    box-shadow: white 5px 5px 0px 2px;

    @media ${theme.media.lteMedium} {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      max-width: 100%;
      justify-items: center;
    }
  `}

  h3 {
    font-weight: 600;
  }

  p, span {
    font-weight: 500;
  }
`;

export const LinkStyled = styled.span`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.xxsmall};
    font-size: 20px;
    line-height: 1.2;
    color: #003c58;
    text-decoration: underline;
    align-items: center;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
      align-items: center;
    }
  `}
`;

export const StyleIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: white;
    text-decoration: none;
    font-size: auto;
    padding: 15px;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
      align-items: center;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 50%;
    font-size: ${theme.fonts.sizes.large};
    color: #a07918;
    padding: 15px;
    text-transform: uppercase;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
      align-items: center;
    }
  `}
`;

export const BoxTextContent = styled.div`
  ${({ theme }) => css`
    max-width: 75%;
    font-size: ${theme.fonts.sizes.medium};
    padding: 15px;
    line-height: 50px;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
      align-items: center;
    }
  `}
`;

export const BoxStyled = styled.div`
  ${({ theme }) => css`
    font-size: 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${theme.spacings.xsmall};
    line-height: 1.8;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      text-align: center;
      align-items: center;
    }
  `}
`;
