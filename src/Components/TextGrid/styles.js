/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    text-align: justify;
    font-size: 30px;
    flex-direction: row;
    font-size: ${theme.fonts.sizes.medium};
  `};
`;

export const ContainerFlex = styled.div`
  ${({ theme }) => css`
    display: flex;
    text-align: justify;
    font-size: 30px;
    flex-direction: row;
    font-size: ${theme.fonts.sizes.medium};
    margin-top: 30px;
  `};
`;
