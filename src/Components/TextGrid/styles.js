/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const ContainerFlex = styled.p`
  ${({ theme }) => css`
    display: grid;

    text-align: justify;
    flex-direction: row;
    color: white;
    font-size: ${theme.fonts.sizes.medium};
    font-family: sans-serif;

    @media ${theme.media.lteMedium} {
      max-width: 100%;
      font-size: ${theme.fonts.sizes.small};
    }
  `};
`;
