/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    column-gap: ${theme.spacings.large};
    justify-content: center;
    padding: ${theme.spacings.xhuge} ${theme.spacings.xlarge};
    align-items: center;
    border-top: 1px solid #a07918;
    text-transform: uppercase;

    .image {
      max-width: 350px;
      display: block;
      height: auto;
      box-shadow: 30px -30px 0px 5px #c3c3c3;
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      text-align: center;
    }
  `}
`;

export const InitialGridTitle = styled.h1`
  ${({ theme }) => css`

  font-size: ${theme.fonts.sizes.large};
  color: #a07918;
  display: flex;
  line-height: 1.2;
  }

  @media ${theme.media.lteMedium} {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    text-align: center;
  }
  `}
`;
