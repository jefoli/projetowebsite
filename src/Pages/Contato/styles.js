/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    padding: ${theme.spacings.large};
    color: ${theme.colors.white};
    background: ${theme.colors.secundaryColor};
    width: 100%;
    height: 900px;
    text-align: center;
    border-radius: ${theme.fonts.sizes.xxsmall};
  `}
`;
