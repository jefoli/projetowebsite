/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    padding: ${theme.spacings.large};
    background: ${theme.colors.secundaryColor};
    border-radius: ${theme.fonts.sizes.xxsmall};
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    min-height: 100px;
    display: flex;
    align-items: flex-end;
  `}
`;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};

    > h1 {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;
