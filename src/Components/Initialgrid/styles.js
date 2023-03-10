/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    border-top: 1px solid #a07918;
    text-transform: uppercase;
    padding: ${theme.spacings.xhuge} ${theme.spacings.xlarge};
    gap: ${theme.spacings.huge};

    @media ${theme.media.lteMedium} {
      display: flex;
      max-width: 100%;
      flex-flow: column wrap;
      box-shadow: 0;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    max-width: 100%;

    > img {
      max-width: 340px;
      box-shadow: 30px -30px 0px 5px #c3c3c3;

      @media ${theme.media.lteMedium} {
        max-width: 100%;
        box-shadow: 0 0 4px #c3c3c3;
      }
    }
  `}
`;

export const InitialGridTitle = styled.h1`
  ${({ theme }) => css`
  display: flex;
  width: 100%;
  font-size: ${theme.fonts.sizes.large};
  color: #a07918;
  align-items: center;
  line-height: 1.2;
  }
  `}
`;
