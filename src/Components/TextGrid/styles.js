/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const ContainerFlex = styled.p`
  ${({ theme }) => css`
    display: grid;
    text-align: center;
    line-height: 1.6;
    flex-direction: row;
    color: white;
    font-size: ${theme.fonts.sizes.medium};
    font-family: sans-serif;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
    }
  `};
`;
