/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const ContainerFlex = styled.p`
  ${({ theme }) => css`
    display: flex;
    text-align: justify;
    flex-direction: row;
    font-size: ${theme.fonts.sizes.medium};
    margin-top: 30px;
    @media ${theme.media.lteMedium};
  `};
`;
