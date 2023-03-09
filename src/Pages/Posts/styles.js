/* eslint-disable no-unused-vars */
import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    padding: ${theme.spacings.large};
    border-radius: ${theme.fonts.sizes.xxsmall};
    max-width: 120rem;
    margin: ${theme.spacings.small} auto;

    @media ${theme.media.lteMedium} {
      align-items: center;
      max-width: 100%;
    }
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
